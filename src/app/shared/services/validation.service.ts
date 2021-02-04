export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, controlName?: any) {
        var sControlName = controlName;
        sControlName = sControlName.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
        // CONFIGURE PREDEFINED ERROR MESSAGE
        let config = {
            'required': `${sControlName} is required`,
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidPhone': 'Invalid phone',
            'invalidWebsite': 'Invalid website. (i.e. https://www.careervine.com)',
            'invalidDate': 'Invalid date.',
            'invalidFutureDate': 'Invalid date. date must be future date',
            'invalidTime': 'Invalid time.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }
    // CREDIT CARD VALIDATOR
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value != undefined) {
            if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                return null;
            } else {
                return { 'invalidCreditCard': true };
            }
        }
        else {
            return null;
        }
    }
    //EMAIL VALIDATOR
    static emailValidator(control) {
        if (control.value != undefined) {
            // RFC 2822 compliant regex
            if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                return null;
            } else {
                return { 'invalidEmailAddress': true };
            }
        }
        else {
            return null;
        }
    }
    // PASSWORD VALIDATOR
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value != undefined) {
            if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
                return null;
            } else {
                return { 'invalidPassword': true };
            }
        }
        else {
            return null;
        }
    }
    // PHONE NUMBER VALIDATOR
    static phoneNumberValidator(control) {
        if (control.value != undefined) {
            let phoneValue = control.value.replace(/[^0-9]/g, '');
            if (phoneValue.length == 10) {
                return null;
            } else {
                return { 'invalidPhone': true };
            }
        }
        else {
            return null;
        }
    }
    // URL VALIDATOR
    static websiteValidator(control) {
        if (control.value != undefined) {
            ///^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
            if (control.value.match(/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i)) {
                return null;
            } else {
                return { 'invalidWebsite': true };
            }
        }
        else {
            return null;
        }
    }
    // FUTURE DATE VALIDATOR
    static futureDateValidator(control) {        
        if (control.value != undefined) {           
            var now = new Date();
            var enteredDate = new Date(control.value);
            var result = true;            
            if ( Object.prototype.toString.call(enteredDate) === "[object Date]" ) {
                // it is a date
                result = true;
                if ( isNaN( enteredDate.getTime() ) ) {  // d.valueOf() could also work
                    result = false;
                    // date is not valid
                }
                else {
                    result = true;
                    // date is valid
                }
            }
            else {
                result = false;
                // not a date
            }
            if(result)
            {
                enteredDate.setHours(23);
                enteredDate.setMinutes(59);
                if(enteredDate > now)
                {                   
                    return null;
                }
                else
                {
                    return { 'invalidFutureDate': true };
                }
            }
            else
            {
                return { 'invalidDate': true };
            }
        }
        else {
            return null;
        }
    }
    // TIME VALIDATOR - 
    static timeValidator(control) {
        if (control.value != undefined) {
            var sTimeValue = control.value.toString();
            var regex = /^([0-1][0-9])\:[0-5][0-9]\s*[ap]m$/i;
            var match = sTimeValue.match( regex );
            if ( match ) {
                return null;                
            }
            else
            {
                return { 'invalidTime': true };
            }
        }
        else {
            return null;
        }
    }
    // TIME VALIDATOR 24 HOURS FORMAT
    static timeValidator24Format(control) {
        if (control.value != undefined) {
            var sTimeValue = control.value.toString();
            var regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm;
            var match = sTimeValue.match( regex );
            if ( match ) {
                return null;             
            }
            else
            {
                return { 'invalidTime': true };
            }
        }
        else {
            return null;
        }
    }
}