import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'general-footer',
    templateUrl: './general-footer.component.html',
    styleUrls: ['./general-footer.component.scss']
})
export class GeneralFooterComponent implements OnInit {   

    constructor(public router: Router) 
    { 
       
    }
    // Page Init
    ngOnInit() {
  
    }
}