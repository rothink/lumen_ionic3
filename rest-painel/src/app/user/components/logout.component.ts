import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
    selector: 'logout-dashboard',
    template: ''
})

export class LogoutComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit() {
       this.authService.builder()
           .logout()
           .then((res) => {
                this.router.navigate(['login'])
            })
    }
}


