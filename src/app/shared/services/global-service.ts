import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalVariable } from '../services/global';

@Injectable()
export class GlobalServices {
    msg:any; 
    client_ip_address: string;
    loggedinData: any;
    adminID: any;
    organizationID: any;
    orgUserID: any;
    
  constructor(    
    private router: Router, 
    // private jsonp: Jsonp,
    private http: HttpClient
  ) {}
// OLD - POST DATA FUNCTION TO REST API
public postData (methodName: any, reqData: any) {           
    var csrftoken = 'EWZKVqFmLYchRUbThcbcfr4Xo8E7j244Qzs2UYyL0cqglAwQuTb2NgmkbXUH16Nz';
         let headers = new HttpHeaders({
           'Content-Type': 'application/json',
           'X-CSRFToken': csrftoken
          });           
          reqData['X-CSRFToken'] = csrftoken;         
          return this.http.post(GlobalVariable.serverUrl + methodName, reqData, {headers: headers}).subscribe(data => {            
              if(data["success"] == 1)
                  return data;
              else
                  return data;
          });
  }

// SET QUERY STRING PASS IN URL
public setQueryString (str: any) {        
        var queryString = {q: str};
        return queryString;
    }  
// GET QUERY STRING VALUE ON PAGE LOAD
public getQueryString (str: any) {
        var queryString = str;        
        queryString = queryString.q;        
        return queryString;
    }
// SET LOCAL STORAGE 
public setLoginLocalStorageItem (key: any, value: any, isKeepLoggedIn?: boolean) {        
       sessionStorage.setItem(key, value);       
    }
//GET LOCAL STORAGE
public getLoginLocalStorageItem (key: any) {        
        var  storeItems = sessionStorage.getItem(key);        
        return storeItems;
    }
//REMOVE LOCAL STORAGE
public removeLoginLocalStorageItem (key: any) {        
        sessionStorage.removeItem(key);
    }
}