import { ErrorHandler, Injectable} from '@angular/core';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { 
  }
  // ERROR HANDLER
  handleError(error) {
      if(error.toString().search('Error: Malformed UTF-8 data') > 0)
      {
        //this.router.navigate(['/not-found']); 
      }
      else
      {         
        throw error;
      }
  } 
}