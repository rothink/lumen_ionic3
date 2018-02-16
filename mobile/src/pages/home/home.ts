import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AppHttpService} from '../../app/app-http.service';
import {Geolocation} from '@ionic-native/geolocation';
import {RestaurantPage} from '../restaurant/restaurant';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    addres: string;
    restaurants: any[] = [];
    status: string;

    constructor(
        public navCtrl: NavController,
        private appHttpService: AppHttpService,
        private geolocation: Geolocation
    ) {

    }

    ngOnInit() {
        let coords = JSON.parse(window.localStorage.getItem('coords')) || null;

        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        if(coords) {
            this.makeRequest(coords);
        }

        this.geolocation.getCurrentPosition()
            .then((res) => {
                coords = {
                    latitude: res.coords.latitude,
                    longitude: res.coords.longitude
                };
                window.localStorage.setItem('coords', JSON.stringify(coords));
                this.makeRequest(coords);
            })
            .catch((error) => {

            }
        );
    }

    protected makeRequest(coords) {
        console.info(coords);
        this.appHttpService.builder('restarurants/by-coords?latitude='+coords.latitude+'&longitude='+coords.longitude)
            .list()
            .then((res) => {
                this.restaurants = res.restaurants;
                this.status = res.status;
            });

    }

    touch(data) {
        this.navCtrl.push(RestaurantPage, {
            id: data.restaurant.id
        });
    }

}
