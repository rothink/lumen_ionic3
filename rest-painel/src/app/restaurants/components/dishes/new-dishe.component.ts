import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../user/services/auth.service";
import {DishesService} from '../../services/dishes.service';
import * as JQuery from 'jquery';

@Component({
    selector: 'app-new-dishe',
    templateUrl: './new-dishe.component.html'
})
export class NewDisheComponent implements OnInit {

    dish: any = {};

    constructor(
        private router: Router,
        private authService: AuthService,
        protected httpService: DishesService
    ) {}

    ngOnInit() {

        JQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        JQuery('.modal').modal('open');

        this.authService.getUser()
            .then((res) => {
                this.dish.restaurant_id = res.restaurant.id;
            });
    }

    addFile(e) {
        this.dish.photo = e.target.files[0];
    }

    save(e) {
        e.preventDefault();

        if(!this.dish.photo) {
            window.Materialize.toast('Selecione uma foto antes', 3000, 'red');
            return ;
        }

        let formData = new FormData;
        formData.append('photo', this.dish.photo);
        formData.append('name', this.dish.name);
        formData.append('description', this.dish.description);
        formData.append('price', this.dish.price);
        formData.append('restaurant_id', this.dish.restaurant_id);

        this.httpService.builder()
            .insert(formData)
            .then(() => {
                this.httpService.eventEmitter.emit();
                JQuery('.modal').modal('close');
            });
    }


}