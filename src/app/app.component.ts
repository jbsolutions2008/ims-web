import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import {NgZone, Renderer2, ElementRef, ViewChild} from '@angular/core'

import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('spinnerElement') spinnerElement: ElementRef;
    isShowSpinner: boolean = false;
    isBackButtonPressed: boolean = false;
    constructor(private router: Router,
                private ngZone: NgZone,
                private renderer: Renderer2,                
                private location: PlatformLocation,                               
            ) {
        
        
        router.events.subscribe((event: RouterEvent) => {
            window.scrollTo(0, 0);
            this._navigationInterceptor(event);
        });
    }
    onActivate(){
        this.location.onPopState((event) => {
            this.isBackButtonPressed = true;
             setTimeout(()=>{    //<<<---    using ()=> syntax
                this.isBackButtonPressed = false;
            },500);   
        });
        if(!this.isBackButtonPressed)
        {
            window.scrollTo(0, 0);
        }
    }

    ngOnInit() {
        
    }
     // Shows and hides the loading spinner during RouterEvent changes
    private _navigationInterceptor(event: RouterEvent): void {

        if (event instanceof NavigationStart) {

            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(() => {

                // For simplicity we are going to turn opacity on / off
                // you could add/remove a class for more advanced styling
                // and enter/leave animation of the spinner
                this.renderer.setStyle(
                    this.spinnerElement.nativeElement,
                    'opacity',
                    '1'
                );
                
            });
        }
        if (event instanceof NavigationEnd) {
            this._hideSpinner();
        }

        // Set loading state to false in both of the below events to
        // hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this._hideSpinner
        }
        if (event instanceof NavigationError) {
            this._hideSpinner();
        }
    }

    private _hideSpinner(): void {

        // We wanna run this function outside of Angular's zone to
        // bypass change detection, 
        this.ngZone.runOutsideAngular(() => {

            // For simplicity we are going to turn opacity on / off
            // you could add/remove a class for more advanced styling
            // and enter/leave animation of the spinner
            this.renderer.setStyle(
                this.spinnerElement.nativeElement,
                'opacity',
                '0'
            );
        });
    }

}

