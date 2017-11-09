import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
    ngOnInit() {
        JQuery('.parallax').parallax();
    }
}