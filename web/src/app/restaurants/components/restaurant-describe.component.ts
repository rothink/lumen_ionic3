import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import { AppHttpService } from '../../app-http.service';


@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurant-describe.component.html'
})
export class RestaurantDescribeComponent {

    constructor(private appHttpService: AppHttpService) {}

}