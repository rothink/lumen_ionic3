import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EvaluationComponent } from './dashboard/evaluation.component';
import { FormsModule } from '@angular/forms';

import { DishesComponent } from './dishes.component';
import { EditComponent } from './edit.component';
import { PasswordComponent } from './password.component';
import { ProfileComponent } from './profile.component';

import { RestaurantService } from './restaurant.service';


const appRoutes : Routes = [
    {path: 'dashboard', component: DashboardComponent,
        children: [
            {path: 'evaluation/:id', component: EvaluationComponent}
        ]
    },
    {path: 'dishes' , component: DishesComponent },
    {path: 'edit' , component: EditComponent },
    {path: 'password' , component: PasswordComponent },
    {path: 'profile' , component: ProfileComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        EditComponent,
        PasswordComponent,
        ProfileComponent,
    ],
    providers: [
        RestaurantService
    ]
})
export class RestaurantsModule {}