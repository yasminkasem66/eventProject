import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../models/sessions';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  userHAsVoted(eventId: number,session: ISession, voterName: string) {
    return session.voters.some((voter) => voter === voterName)
  //   let event!:any;
  //    this.eventService.getEvent(eventId).subscribe((event)=>{
  //     event= event
  //   })
  //  return event?.sessions.forEach((ses: { voters: any[]; })=>ses.voters.some((voter: string) => voter == voterName)) 
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    // session.voters.push(voterName)
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    this.http.post(url,{},options)
    .pipe(catchError(this.handleError<ISession[]>('addVoter'))).subscribe()
  }

  deleteVoter(eventId: number,session: ISession, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName)
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    this.http.delete(url)
    .pipe(catchError(this.handleError<ISession[]>('deleteVoter'))).subscribe()
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    };
  }
}
