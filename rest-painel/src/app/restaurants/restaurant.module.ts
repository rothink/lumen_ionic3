import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EvaluationComponent } from './dashboard/evaluation.component';

import { DishesComponent } from './dishes.component';
import { EditComponent } from './edit.component';
import { PasswordComponent } from './password.component';
import { ProfileComponent } from './profile.component';


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
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        EditComponent,
        PasswordComponent,
        ProfileComponent,
    ]
})
export class RestaurantsModule {}