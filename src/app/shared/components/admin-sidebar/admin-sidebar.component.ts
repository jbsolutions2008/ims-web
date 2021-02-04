import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServices } from '../../services';
// import { NgClass } from '@angular/common';

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {
    isActive = false;
    showMenu = '';
    loggedinData: any;
    isSuperAdmin: any;

    constructor(private router: Router, private GlobalServices: GlobalServices) {

        this.loggedinData = JSON.parse(sessionStorage.getItem('adminLogin'));        
        this.isSuperAdmin = this.loggedinData.isSuperAdmin;
     }

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

    // Clear Session variables on logout call
    onLoggedout() {        
        this.GlobalServices.removeLoginLocalStorageItem('adminLogin');
        this.GlobalServices.removeLoginLocalStorageItem('isAdminLoggedin');
        this.router.navigate(['/general/admin-login']);
    }
}
