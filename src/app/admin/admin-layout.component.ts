import { Component, OnInit } from '@angular/core';
import { Router,  NavigationEnd} from '@angular/router';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
import {map, filter, mergeMap} from 'rxjs/operators';

@Component({
    selector: 'admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
    isLoggedIn: boolean;
    constructor(public router: Router) {
        this.isLoggedIn = true;

        router.events        
        .subscribe((event:any) => {            
                if(event.url != undefined)
                {
                    if(event.url.indexOf("/admin-login") == 0 )
                    {
                        this.isLoggedIn = false;                        
                    }
                    else{
                        this.isLoggedIn = true;                        
                    }
                }
            } );
     }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    }

}
