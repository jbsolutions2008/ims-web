import { Component, OnInit } from '@angular/core';
import { Router,  NavigationEnd} from '@angular/router';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
import {map, filter, mergeMap} from 'rxjs/operators';

@Component({
    selector: 'app-layout',
    templateUrl: './general-layout.component.html',
    styleUrls: ['./general-layout.component.scss']
})
export class GeneralLayoutComponent implements OnInit {
    isLoggedIn: boolean;
    constructor(public router: Router) {        
        this.isLoggedIn = true;

        router.events        
        .subscribe((event:any) => {            
            } );
     }

    ngOnInit() {        
        if (this.router.url === '/') {
            this.router.navigate(['/admin-login']);
        }
    }

}
