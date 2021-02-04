import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { GetDataService, GlobalServices } from '../../shared';
import { Router }  from '@angular/router';

@Component({
    selector: 'admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
    //LOCAL VARIABLES
    loginForm: any;
    loginModel: any = {};
    isError: boolean = false;
    errorMessage: string;
    isKeepMeLoggedIn: boolean = false;
    loading: boolean = false;


    constructor(private formBuilder: FormBuilder, private http: HttpClient, private GetDataService: GetDataService, private router: Router, private GlobalServices: GlobalServices) {
        // FORM BUILDER FOR LOGIN MODEL WITH VALIDATION
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });

     }
    ngOnInit() {   
        // ON PAGE INIT CHECKING FOR LOCAL STORAGE AS ADMIN LOGGED IN OT NOT      
       if (this.GlobalServices.getLoginLocalStorageItem('isAdminLoggedin')) {
            this.router.navigate(['/admin/dashboard']);
        }
    }
    // CALL ADMIN LOGIN WHEN PRESS LOGIN BUTTON
    AdminLogin() {                  
             this.loading = true;
            var reqData = {
                ParamUsername: this.loginModel.username,
                ParamPassword: this.loginModel.password,
            } 
            // CALL API CALL AND GE RETURN RESULT               
            this.GetDataService
            .postData("adminLogin", reqData)
            .then((res) => {                     
                        // IF SUCCESSFULLY LOGGED IN   
                        if(res['success'] == 1)
                        {   
                            this.isError = false;
                            this.errorMessage = '';
                            // STORING RETURN VALUES IN LOCAL STORAGE
                            var adminLoginLocalstorage = {
                                id: res["data"]["_id"],
                                name: res["data"]["name"],                               
                            };
                            this.GlobalServices.setLoginLocalStorageItem('adminLogin', JSON.stringify(adminLoginLocalstorage));
                            this.GlobalServices.setLoginLocalStorageItem('isAdminLoggedin', 'true');                            
                            this.router.navigate(['/admin/dashboard']);
                        }
                        else
                        {
                            if(res['success'] == 0)
                            {
                                this.loading = false;
                                this.isError = true;                                
                                this.errorMessage = res["data"];
                            }
                            this.GlobalServices.removeLoginLocalStorageItem('AdminLogin');
                            this.GlobalServices.removeLoginLocalStorageItem('isAdminLoggedin');
                        }
                });
            
    }
}
