import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {RestaurantComponent} from './components/restaurant.component';

const appRoutes: Routes = [
    {path: 'search', component: RestaurantComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        RestaurantComponent
    ]
})
export class RestaurantsModule {}