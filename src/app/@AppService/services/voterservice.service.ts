import { Injectable } from '@angular/core';
import { ISession } from '../models/sessions';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  userHAsVoted(session:ISession,voterName:string){
  return session.voters.some((voter)=> voter=== voterName)
  }

  addVoter(session:ISession,voterName:string){
    session.voters.push(voterName)
  }

  deleteVoter(session:ISession,voterName:string){
    session.voters=session.voters.filter((voter)=> voter!== voterName)
  }
}
