import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralLayoutRoutingModule } from './general-layout-routing.module';
import { GeneralLayoutComponent } from './general-layout.component';
import { AdminLoginComponent } from '../general/login/admin-login.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { SwiperComponent } from 'angular2-useful-swiper';
import {ScrollToModule} from 'ng2-scroll-to';


import { GetDataService,         
        ControlMessagesModule, 
        GlobalServices,  
        GlobalVariable,
        // GeneralHeaderComponent,
        GeneralFooterComponent,
        GeneralSidebarComponent,                
        PagerService,
        PubSubService} from '../shared';

        import {  MatAutocompleteModule } from "@angular/material/autocomplete";
        import {  MatButtonModule } from "@angular/material/button";
        import {  MatButtonToggleModule } from "@angular/material/button-toggle";
        import {  MatCardModule } from "@angular/material/card";
        import {  MatCheckboxModule } from "@angular/material/checkbox";
        import {  MatChipsModule } from "@angular/material/chips";
        import {  MatDatepickerModule, MatDatepicker } from "@angular/material/datepicker";
        import {  MatDialogModule } from "@angular/material/dialog";
        import {  MatGridListModule } from "@angular/material/grid-list";
        import {  MatIconModule } from "@angular/material/icon";
        
        import {  MatInputModule } from "@angular/material/input";
        import {  MatListModule } from "@angular/material/list";
        import {  MatMenuModule } from "@angular/material/menu";
        import {  MatProgressBarModule } from "@angular/material/progress-bar";
        import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
        import {  MatRadioModule } from "@angular/material/radio";
        import {  MatSelectModule } from "@angular/material/select";
        import {  MatSliderModule } from "@angular/material/slider";
        import {  MatSlideToggleModule } from "@angular/material/slide-toggle";
        
        import {  MatSnackBarModule } from "@angular/material/snack-bar";
        import {  MatTabsModule } from "@angular/material/tabs";
        import {  MatToolbarModule } from "@angular/material/toolbar";
        import {  MatTooltipModule } from "@angular/material/tooltip";
        import {  MatFormFieldModule } from "@angular/material/form-field";
        
        // import {  MatNativeDateModule } from "@angular/material/datepicker";
        import {  MatSortModule } from "@angular/material/sort";
        import {  MatTableModule } from "@angular/material/table";
        import {  MatPaginatorModule } from "@angular/material/paginator";
//import {Subscription} from "rxjs";

//let providers = {
    // "google": {
    //   "clientId": "GOOGLE_CLIENT_ID"
    // },
    // "linkedin": {
    //   "clientId": "7863apom3guk38"
    // },
    // "facebook": {
    //   "clientId": "305419209886617",
    //   "apiVersion": "v2.3" //like v2.4 
    // }
 // };

@NgModule({
    imports: [
        InfiniteScrollModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        GeneralLayoutRoutingModule,
        ControlMessagesModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        // SwiperComponent,
        ScrollToModule.forRoot(),
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        // SwiperComponent
    ],
    declarations: [
        GeneralLayoutComponent,        
        GeneralFooterComponent,
        GeneralSidebarComponent,        
        AdminLoginComponent,
        
    ],
    providers: [GetDataService, GlobalServices, PagerService, PubSubService],
})

export class GeneralLayoutModule { }
//Angular2SocialLoginModule.loadProvidersScripts(providers);