import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServices } from '../../services';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

    constructor( private router: Router, private GlobalServices: GlobalServices) { }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    // Clear Session variables on logout call
    onLoggedout() {
        this.GlobalServices.removeLoginLocalStorageItem('adminLogin');
        this.GlobalServices.removeLoginLocalStorageItem('isAdminLoggedin');
        this.router.navigate(['/general/jbs-admin-login']);
    }   
}
