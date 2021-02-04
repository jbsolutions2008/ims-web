import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HttpClientJsonpModule } from '@angular/common/http';
import { NgModule, ErrorHandler, enableProdMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//GOT MODULE FROM SHARED SERVICES
import { 
  AuthGuard, 
  AdminAuthGuard,   
  ControlMessagesModule,
  GetDataService, 
  GlobalErrorHandler,   
  GlobalServices
} from './shared';

// RETRIVE MATERIAL DESIGN MODULE - AS WE ARE USING MATERIAL DESIGN CONCEPT FOR FORM
import {  MatAutocompleteModule } from "@angular/material/autocomplete";
import {  MatButtonModule } from "@angular/material/button";
import {  MatButtonToggleModule } from "@angular/material/button-toggle";
import {  MatCardModule } from "@angular/material/card";
import {  MatCheckboxModule } from "@angular/material/checkbox";
import {  MatChipsModule } from "@angular/material/chips";
import {  MatDatepickerModule } from "@angular/material/datepicker";
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



enableProdMode();
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    ControlMessagesModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
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
    MatFormFieldModule,
    CommonModule,
    //NgxMatSelectSearchModule
  ],
  exports:[
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ControlMessagesModule,
        BrowserAnimationsModule,
        //NoopAnimationsModule,
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
        MatFormFieldModule,
        HttpClientJsonpModule
  ],
  providers: [{
                  provide: ErrorHandler, 
                  useClass: GlobalErrorHandler
              },
              {
                  provide: LocationStrategy, 
                  useClass: HashLocationStrategy
              },
              // {
              //   provide: XSRFStrategy,
              //   useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
              // },
              AuthGuard, AdminAuthGuard, GetDataService, GlobalServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
