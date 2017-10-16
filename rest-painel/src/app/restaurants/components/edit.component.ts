import {Component, OnInit} from '@angular/core';
import {AppHttpService} from  '../../app-http.service';
import {RestaurantService} from  '../services/restaurant.service';
import * as JQuery from 'jquery';

@Component({
    selector: 'app-dashboardedit',
    templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit {
    dragging: boolean = false;
    restaurant: any = {};
    photos: any[] = [];
    address: any = {};
    upload_status: string = 'not';
    restaurant_photo: any = null;

    constructor(protected appHttpService: AppHttpService,
                protected httpService: RestaurantService) {
    }

    ngOnInit() {
        this.appHttpService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                this.httpService.builder().view(id)
                    .then((res) => {
                        this.restaurant = res;
                        this.address = res.address || {};
                        window.Materialize.updateTextFields();

                        return this.httpService.builder('/' + this.restaurant.id + '/photos')
                            .list();
                    })
                    .then((res) => {
                        this.photos = res;
                        this.materialboxStart();
                    });
            });
    }

    upload(e) {
        e.preventDefault();

        let image_url: any = null;
        if (e.dataTransfer) {
            image_url = e.dataTransfer[0];
        } else {
            image_url = e.target.files[0];
        }
        this.upload_status = 'sending';

        let formData = new FormData();
        formData.append('photo', image_url);

        this.httpService.builder()
            .upload(this.restaurant.id + '/upload', formData)
            .then(() => {
                this.upload_status = 'success';
            })
            .catch(() => {
                this.upload_status = 'error';
            });
    }

    dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }

    searchCep() {
        let cep = this.address.cep || null;
        if (cep && cep.length == 8) {
            this.httpService.getCep(cep)
                .then((res) => {
                    this.address = {
                        cep: cep,
                        address: res.logradouro,
                        city: res.localidade,
                        neighborhood: res.bairro,
                        state: res.uf,
                    }
                });
        }
    }

    save(e) {
        e.preventDefault();
        this.httpService.builder()
            .update(this.restaurant.id, this.restaurant)
            .then((res) => {
                return this.httpService.builder('/' + this.restaurant.id + '/address')
                    .insert(this.address);
            })
            .then(() => {
                window.Materialize.toast('Salvo com sucesso', 3000);
            })
    }

    preparePhoto(e) {
        let image_url = e.target.files[0];
        let formData = new FormData();
        formData.append('restaurant_id', this.restaurant.id);
        formData.append('url', image_url);
        this.restaurant_photo = formData;
    }

    sendPhoto(e) {
        if(this.restaurant_photo === null ){
            window.Materialize.toast('Selecione uma imagem antes', 3000, 'red');
            return;
        }

        this.httpService.builder()
            .upload('photos', this.restaurant_photo)
            .then(() => {
                window.Materialize.toast('Foto enviada com sucesso', 3000, 'green');
                return this.httpService.builder('/' + this.restaurant.id + '/photos')
                    .list();
            })
            .then((res) => {
                this.photos = res;
                this.materialboxStart();
            });

    }

    deletePhoto(photo) {
        this.httpService.builder('/photos')
            .remove(photo.id)
            .then(() => {
                window.Materialize.toast('Foto removida com sucesso', 3000, 'green');
                return this.httpService.builder('/' + this.restaurant.id + '/photos')
                    .list();
            })
            .then((res) => {
                this.photos = res;
                this.materialboxStart();
            });
    }

    private materialboxStart() {
        setTimeout(() => JQuery('.materialboxed').materialbox(), 1000);
    }
}