import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetDataService, GlobalServices } from '../../shared';


@Component({
    selector: 'app-manage-product-list',
    templateUrl: './manage-product-list.component.html',
    styleUrls: ['./manage-product-list.component.scss']
})

export class ManageProductListComponent implements OnInit {
    // LOCAL VARIABLES
    color = 'primary';
    mode = 'determinate';
    value = 50;
    msg:any; 
    productList: any = []; 
    loggedinData: any;
    adminID: any;
    hideDeleteDialog :boolean=true;
    name: string;
    position: number;
    weight: number;
    symbol: string;
    loading: boolean = false;
    proname: string = "";    
    objectid: string = "";
    isSuperAdmin: any;

    // DECLARE HEADER VALUES - FOR SORT, SEARCH AND PAGINATION
    displayedColumns: string[] = ['Name', 'Price', 'Brand', 'Details', 'Action']; 
    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;       

    constructor(public router: Router,                 
                private GetDataService: GetDataService,                
                private GlobalServices: GlobalServices, 
                private modalService: NgbModal,                
                ) 
    {

        this.loggedinData = JSON.parse(sessionStorage.getItem('adminLogin'));      
        this.adminID = this.loggedinData.id
        this.isSuperAdmin = this.loggedinData.isSuperAdmin;
    }
    // APPLY FILTER WHEN TYPING IN SEARCH FIELD 
    applyFilter(filterValue: string) {        
        this.productList.filter = filterValue.trim().toLowerCase();
        if (this.productList.paginator) {
            this.productList.paginator.firstPage();
        }
    }   

    //OPEN DIALOG BOX ON WHEN CLICK ON DELETE PRODUCT BUTTON.
    openDeleteDialog(deleteDialog: any, ProName: string, ObjectID: string){
        this.msg = null;
        this.hideDeleteDialog = true;
        this.proname = ProName;        
        this.objectid = ObjectID;
        this.modalService.open(deleteDialog, { windowClass: 'dark-modal' });
    }
    // DELETE PRODUCT CALL TO API
    deleteProduct(id) {        
        this.name = "";        
        this.objectid = "";
        var ID = id;        
            var reqData = {
                ParamProductID: ID
            }
            this.GetDataService
            .postData("deleteProduct/", reqData)
            .then((res) => {
                        if(res['success']){                            
                            this.msg = res['msg'];
                            this.hideDeleteDialog = false;
                            this.ngOnInit();
                        }
                });
    }
  

    ngOnInit() {
        this.loading = true;     
        this.loggedinData = JSON.parse(localStorage.getItem('adminLogin'));
        var reqData = {
                loggedinData: this.loggedinData
            }
        this.GetDataService
            .getData("getProductList", reqData)
            .subscribe((res) => {                                     
                    if (res["data"] != "") {
                        this.productList = new MatTableDataSource(res['data']);
                        this.productList.paginator = this.paginator;
                        this.productList.sort = this.sort;
                    }                    
                    this.loading = false;                                       
        });
    }
}
