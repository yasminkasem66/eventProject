import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appLocationvalidator]',
  providers:[{
    provide:NG_VALIDATORS,useExisting:LocationvalidatorDirective,multi:true
  }]
})
export class LocationvalidatorDirective implements Validators {
  Validate(control: FormGroup): { [key: string]: any } {
    let addressControl = control.controls['address']
    let cityControl = control.controls['city']
    let countryControl = control.controls['country']
    let onlineUrlControl = (<FormGroup>control.root).controls['onlineUrl']

    console.log(addressControl);
    

    if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)){
      return null
    }else{
      return {validateLocation:false}
    }
    
  }
}
