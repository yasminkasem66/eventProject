import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {

    let loginInfo = { username: userName, password: password }
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        console.log(data)

        this.currentUser = <IUser>data['user']
      }
      ))
      .pipe(catchError(err => {
        return of(false)
      }))


    // this.currentUser={
    //   id: 1,
    //   firstName: 'jasmin',
    //   lastName: 'kassem',
    //   userName: 'jaskas',
    // }

  }
  updateUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.put(`/api/users/${this.currentUser.id}`,  this.currentUser, options)

  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  checkAuthenticationStatus(){
    return this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if(data instanceof Object) {
        this.currentUser=<IUser> data;
      }
    }
    ))
  }

  logOut(){
    this.currentUser=undefined
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post('/api/logout',{},options)

  }
}
