import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        #loginForm {
            margin-top: 50px;
        }
    `]
})

export class LoginComponent {}