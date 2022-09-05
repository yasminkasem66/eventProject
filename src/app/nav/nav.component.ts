import { ISession } from './../@AppService/models/sessions';
import { AuthService } from './../@AppService/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../@AppService/services/event.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`
 .nav .navbar-nav {
    font-size: 15px;
}

#searchForm {
    margin-right: 100px
}

/* @media (max-width:1200px) {
    #searchForm {
        display: none;
    }
} */

li>a.active {
    color: #F97924;
}`]
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSessions!: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSession(searchTerm: any) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(" this.foundSessions", this.foundSessions);

    })
  }

}
