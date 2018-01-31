import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {

    constructor(private authService: AuthService) {}

    user: any = {};

    ngOnInit () {
        this.authService.getUser()
            .then((user: any) => {
                this.user = user;
            });
    }

    save(e) {
        e.preventDefault();
        this.authService.builder()
            .editProfile(this.user)
            .then((res) => {
                window.Materialize.toast('Usuário atualizado com sucesso', 3000, 'green');
                this.user = res;
            })
            .catch((res) => {
                window.Materialize.toast('Por favor, tente novamente', 3000, 'red');
            });

    }

}
