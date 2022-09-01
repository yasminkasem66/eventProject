import { AuthService } from './../../@AppService/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  mouseenter!: boolean;

  constructor(
    private authService: AuthService
    , private router: Router
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
      this.authService.updateUser(this.profileForm.value.firstName, this.profileForm.value.lastName)
      this.router.navigate(['events'])

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

}
