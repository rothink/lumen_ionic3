import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppHttpService } from  './app-http.service';
import { RestaurantsModule } from './restaurants/restaurant.module';
import { UserModule} from './user/user.module';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestaurantsModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
