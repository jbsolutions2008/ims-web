import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'mat-error',
  template: `<div *ngIf="errorMessage !== null" class="form-control-feedback small text-left text-danger font-italic" >{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl
  @Input() labelName: string = null
  @Input() isSubmitButtonClicked: boolean = false

  constructor() { }
// Control validation global 
get errorMessage() {        
    for (let propertyName in this.control.errors) {      
      var controlName = '';
      if(this.labelName == undefined)
      {
        controlName = this.getControlName(this.control);
      }
      else
      {
        controlName = this.labelName.toString();
      }
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.isSubmitButtonClicked)) {        
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], controlName);
      }
    }
    return null;
  }

getControlName(control: AbstractControl)
{
    var controlName = null;
    var parent = control["_parent"];

    // only such parent, which is FormGroup, has a dictionary 
    // with control-names as a key and a form-control as a value
    if (parent instanceof FormGroup)
    {
        // now we will iterate those keys (i.e. names of controls)
        Object.keys(parent.controls).forEach((name) =>
        {
            // and compare the passed control and 
            // a child control of a parent - with provided name (we iterate them all)
            if (control === parent.controls[name])
            {
                // both are same: control passed to Validator
                //  and this child - are the same references
                controlName = name;
            }
        });
    }
    // we either found a name or simply return null
    return controlName;
}
}