import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppHttpService} from '../../app/app-http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private appHttpService: AppHttpService) {

  }

  ngOnInit() {
    this.appHttpService.builder('asegaegas').list();
  }

}
