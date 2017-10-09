import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';

@Component({
    selector: 'app-dashboardedit',
    templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit {
    dragging: boolean = false;

    ngOnInit () {}

    upload(e) {
        e.preventDefault();
        console.info(e.dataTransfer.files);
    }

    dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }
}
