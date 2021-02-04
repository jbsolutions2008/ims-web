import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from '../services/global';
import { Observable } from 'rxjs';

@Injectable()
export class GetDataService {    
  constructor(private http: HttpClient) {}  

  // GET DATA FROM API CALL
  public getData (methodName: any, reqData?: any): Observable<any> {         
        //REST API CALL TO API TO FETCH DATA        
        return this.http.get(GlobalVariable.serverUrl + methodName, {params: reqData}).pipe(data => {          
                return data;
        });
    }

  // POST DATA TO SAVE USING REST API CALL 
  public postData (methodName: any, reqData: any) {      
      return new Promise(resolve => {
      let headers = new HttpHeaders({'Content-Type': 'application/json'});      
          this.http.post(GlobalVariable.serverUrl + methodName, reqData).subscribe(data => {                        
              if(data["success"])
                  resolve(data);
              else
                  resolve(data);
          }); 
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}