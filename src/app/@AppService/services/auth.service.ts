import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!:IUser;

  constructor() { }

  loginUser(userName:string,password:string){
    this.currentUser={
      id: 1,
      firstName: 'jasmin',
      lastName: 'kassem',
      userName: 'jaskas',
    }
     
  }
  updateUser(firstName:string,lastName:string){
    this.currentUser.firstName=firstName
    this.currentUser.lastName=lastName
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
