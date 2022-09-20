import { Component, OnInit } from '@angular/core';
import { AuthService } from './@AppService/services/auth.service';

@Component({
  selector: 'event-app-root',
  template: `
  <app-nav></app-nav>
  <router-outlet></router-outlet>
  <!-- <app-event-list></app-event-list> -->
  <!-- <img src="assets/images/basic-shield.png"> -->
  `
})
export class EventAppComponent implements OnInit {
  constructor(private authService:AuthService){}
  ngOnInit(): void {
   this.authService.checkAuthenticationStatus().subscribe();
  }
  title = 'eventProject';
}
