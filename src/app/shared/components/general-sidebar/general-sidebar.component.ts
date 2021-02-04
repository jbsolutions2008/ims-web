import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServices } from '../../services';

@Component({
    selector: 'general-sidebar',
    templateUrl: './general-sidebar.component.html',
    styleUrls: ['./general-sidebar.component.scss']
})
export class GeneralSidebarComponent {
    constructor(private router: Router, private GlobalServices: GlobalServices) { }
    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
   
}
