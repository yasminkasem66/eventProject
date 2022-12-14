import { AuthService } from './../../@AppService/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/app/@AppService/services/toastr.service';
// import { ToastrService } from 'src/app/@AppService/services/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  mouseenter!: boolean;

  constructor(
    private authService: AuthService,
    // private  toastrService:  ToastrService
    @Inject(TOASTR_TOKEN) private toastr:Toastr,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      lastName: new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
    })

  }


  updateUser() {
    if (this.profileForm.valid) {
      console.log("this.profileForm ", this.profileForm.value);
      this.authService.updateUser(this.profileForm.value.firstName, this.profileForm.value.lastName).subscribe((data)=>{
        this.toastr.success('profile saved',"")

      })
      // this.toastrService.success('xxx',"uuu")
      // this.router.navigate(['events'])

    }

  }

  get fc() {
    return this.profileForm.controls

  }
  cancel() {
    this.router.navigate(['events'])

  }

  validateFirstName() {
    return this.fc.firstName?.invalid && this.fc.firstName?.touched
  }
  validateLastName() {
    return this.fc.lastName?.invalid && this.fc.lastName?.touched
  }
  logOut(){
    this.authService.logOut().subscribe((data)=>{
      this.router.navigate(['/user/login'])

    })
  }

}
