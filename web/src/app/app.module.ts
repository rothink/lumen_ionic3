import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {UserModule} from './user/user.module';
import {RestaurantsModule} from './restaurants/restaurants.module';

import {AppHttpService} from  './app-http.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    }
];

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserModule,
        RestaurantsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AppHttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
