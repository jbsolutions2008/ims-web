import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GetDataService, GlobalServices } from '../../shared';


@Component({
    selector: 'app-add-edit-product',
    templateUrl: './add-edit-product.component.html',
    styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
    msg:any; 
    ProductList: any;
    ManageProduct: any = {};
    loggedinData: any;    
    productID: any;    
    prouniqueid: any;
    isSubmitButtonClicked: boolean = false;
    manageBrand: any;    
    loading: boolean = false;    

    constructor(private formBuilder: FormBuilder,
                public router: Router, 
                private http: HttpClient, 
                private GetDataService: GetDataService,                 
                private activatedRoute: ActivatedRoute, 
                private GlobalServices: GlobalServices) 
    {        

        this.loggedinData = JSON.parse(sessionStorage.getItem('adminLogin'));                
        var params = this.activatedRoute.snapshot.queryParams;                
        if(Object.keys(params).length > 0)
        {
           var queryString = this.GlobalServices.getQueryString(params)           
           this.productID = queryString;
           var reqData = {
                productID: this.productID
           }
        } else {                       
            this.productID = 0;
        }
        // POPULATE BRAND DROPDOWN LIST
         this.manageBrand = [
            {
              brand: 'US Polo',
              brandname: 'US Polo'
            },
            {
              brand: 'Puma',
              brandname: 'Puma'
            },
            {
              brand: 'Rolex',
              brandname: 'Rolex'
            },
            {
              brand: 'Levis',
              brandname: 'Levis'
            }
          ]
          
    }
    // CALL ADD/EDIT PRODUCT DETAILS 
    updateProductDetails() {     
        const formData: any = new FormData();            
        this.isSubmitButtonClicked = true;
        this.msg = null;
        // CHECK BOTH VALIDATION AND ANY VALUES CHANGE THEN ONLY FORM SUBMIT
        if (this.ProductList.dirty && this.ProductList.valid) {         
                this.loading = true;                                
                var reqData = {
                    ParamProductID: this.productID,    
                    ParamName: this.ManageProduct['name'],                    
                    ParamPrice: this.ManageProduct['price'],
                    ParamBrand: this.ManageProduct['brand'],
                    ParamDetails: this.ManageProduct['details'],                                        
                    
                }              
                this.GetDataService
                .postData('updateProductDetails/', reqData)
                .then((res) => {                            
                            if(res['success']){
                                this.msg = res['msg'];                                
                            }
                            this.loading = false;
                    });                
                }
                
           
    }

   
    ngOnInit() {
        //DECLARE FORM BUILDER WITH VALIDATION REQUIRED
        this.ProductList = this.formBuilder.group({
            prouniqueid: [''],  
            name: ['', Validators.required],                
            price: ['', Validators.required],
            brand: ['', Validators.required],
            details: ['', Validators.required],                
            });
         var params = this.activatedRoute.snapshot.queryParams;        
         if(Object.keys(params).length > 0)
         {             
            this.loading = true;
            var queryString = this.GlobalServices.getQueryString(params)            
            this.productID = queryString;
            var reqData = {
                ParamProductID: this.productID
            }      
            
            this.GetDataService
            .getData("getProductDetails", reqData)
            .subscribe((res) => {                
                if(res != null)
                {
                    if(res['success'] == 1)
                    {
                       // SET VALUES TO FORM FIELD RECEIVED FROM API 
                       this.ManageProduct = res['data'];
                       this.ManageProduct.prouniqueid = this.ManageProduct[0]._id;
                        this.ManageProduct.name = this.ManageProduct[0].name,                        
                        this.ManageProduct.price = this.ManageProduct[0].price,                        
                        this.ManageProduct.brand = this.ManageProduct[0].brand,
                        this.ManageProduct.details = this.ManageProduct[0].details                      
                      
                    }
                } 
                this.loading = false;         
                });                           
         }        
    }
}
