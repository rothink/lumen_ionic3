import {Component, OnInit} from '@angular/core';

import {DishesService} from '../services/dishes.service';
import {AuthService} from  '../../user/services/auth.service';

@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.component.html'
})

export class DishesComponent implements OnInit {

    restaurant_id: string;
    dishes: any = [];

    constructor (
        private httpService: DishesService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.authService.getUser()
            .then((res) => {
                this.restaurant_id = res.restaurant.id;
                let options = {
                    filters: [
                        {restaurant_id: this.restaurant_id}
                    ]
                };
                this.httpService.eventEmitter
                    .subscribe(() => {
                        this.httpService.builder()
                            .list(options)
                            .then((res) => {
                                this.dishes = res;
                            });
                    });
                this.httpService.eventEmitter.emit(0);
            });
    }

    remove(id: number) {
        this.httpService.builder()
            .remove(id)
            .then(() => {
                window.Materialize.toast('Prato removido com sucesso', 3000, 'green');
                this.httpService.eventEmitter.emit();
            })
    }
}
