// import { Injectable } from '@angular/core';

import { InjectionToken } from "@angular/core";

 
// declare let  toastr:any;
// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {
//    constructor() { }

//   success(msg:string, title:string){
//     toastr.success(msg,title)
//   }

//   info(msg:string, title:string){
//     toastr.info(msg,title)
//   }

//   warning(msg:string, title:string){
//     toastr.warning(msg,title)
//   }

//   error(msg:string, title:string){
//     toastr.error(msg,title)
//   }
// }


export let TOASTR_TOKEN=  new InjectionToken<Toastr >('toastr');
export interface Toastr{
  success(msg:string, title:string):void;
  info(msg:string, title:string):void;
  warning(msg:string, title:string):void;
  error(msg:string, title:string):void;
}
