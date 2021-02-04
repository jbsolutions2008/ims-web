import { Injectable, Inject  } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { GlobalServices } from '../';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, @Inject(DOCUMENT) document: any) {
    }
    canActivate() {
        var storeItems = localStorage.getItem('isAdminLoggedin');
        if(storeItems == null)
        {
            storeItems = sessionStorage.getItem('isAdminLoggedin');
        }
        if (storeItems) {
            return true;
        }
        this.router.navigate(['/general/admin-login']);
        return false;
    }
}

// Check authentication when admin try to access admin panel
@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router, @Inject(DOCUMENT) document: any) {
    }
    canActivate() {
        //Check session variables stored in session -- If not found then redirect to login page
        var storeItems = sessionStorage.getItem('isAdminLoggedin');              
        if (storeItems) {
            return true;
        }        
        this.router.navigate(['/general/admin-login']);
        return false;
    }
}

