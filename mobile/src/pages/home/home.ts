import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AppHttpService} from '../../app/app-http.service';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        private appHttpService: AppHttpService,
        private geolocation: Geolocation
    ) {

    }

    ngOnInit() {
        // let coords = JSON.parse(window.localStorage.getItem('coords')) || null;
        let coords = {
            latitude: -23.6194693,
            longitude: -45.4096306
        };
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        if(coords) {
            this.makeRequest(coords);
        }


        this.geolocation.getCurrentPosition(options)
            .then((res) => {
                coords = {
                    latitude: res.coords.latitude,
                    longitude: res.coords.longitude
                };
                // window.localStorage.setItem('coords', JSON.stringify(coords));
                this.makeRequest(coords);
            });
    }

    protected makeRequest(coords) {
        alert(coords);
        console.info(coords);

    }

}
