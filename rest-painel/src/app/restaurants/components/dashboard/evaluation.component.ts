import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-evaluation',
    templateUrl: './evaluation.component.html'
})

export class EvaluationComponent implements OnInit {

    constructor(private router : Router) {}

    ngOnInit () {
        JQuery('.modal').modal({
            complete: () => this.router.navigate(['/dashboard'])
        });
        JQuery('.modal').modal('open');
    }

    save (e) {
        e.preventDefault();
        window.Materialize.toast('Salvo com sucesso', 3000);
    }
}
