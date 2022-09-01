import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'login', component:LogInComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
