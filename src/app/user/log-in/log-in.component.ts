import { AuthService } from './../../@AppService/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  userName!:string;
  password!:string;
  mouseenter!:boolean; 
  loginInvalid=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(formValue:any){
  console.log({formValue});
  this.authService.loginUser(formValue.userName,formValue.password).subscribe(res=>{
    if(!res){
      this.loginInvalid=true
    }else{
      this.router.navigate(['events'])
    }
  })
  
  }
  cancel(){
  this.router.navigate(['events'])
  
  }

}
