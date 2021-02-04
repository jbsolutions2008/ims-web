import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { GetDataService, ControlMessagesModule, GlobalServices, AdminHeaderComponent, AdminSidebarComponent } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AddEditProductComponent } from './manage-product/add-edit-product.component';
import { ManageProductListComponent } from './manage-product/manage-product-list.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

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
import {  MatSortModule } from "@angular/material/sort";
import {  MatTableModule } from "@angular/material/table";
import {  MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ControlMessagesModule,
        NgbModule,
        AdminLayoutRoutingModule,       
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
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        InfiniteScrollModule,
        NgxMatSelectSearchModule
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
        MatFormFieldModule,        
        NgxMatSelectSearchModule
    ],
    declarations: [
        AdminLayoutComponent,
        AdminHeaderComponent,
        AdminSidebarComponent,        
        AddEditProductComponent,        
        ManageProductListComponent,
        AdminDashboardComponent,           
    ],
    providers: [GetDataService,  GlobalServices, MatDatepicker],

  
})
export class AdminLayoutModule { }
