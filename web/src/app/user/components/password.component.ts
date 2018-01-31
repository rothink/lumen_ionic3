import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})

export class PasswordComponent {

    constructor(private authService: AuthService) {}

    user: any = {
        password: null,
        password_confirmation: null
    }

    ngOnInit () {}

    save(e) {
        e.preventDefault();
        if(this.user.password && (this.user.password_confirmation === this.user.password)){
            this.authService.builder()
                .changePassword(this.user)
                .then(() => {
                    window.Materialize.toast('Senha alterada com sucesso', 3000, 'green');
                })
        } else {
            window.Materialize.toast('Verifique a senha', 3000, 'red');
        }
    }
}
