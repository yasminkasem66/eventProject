import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/@AppService/models/sessions';

@Component({
  selector: 'app-sessionlist',
  templateUrl: './sessionlist.component.html',
  styleUrls: ['./sessionlist.component.scss']
})
export class SessionlistComponent implements OnChanges {
   
  

  @Input() sessions!:ISession[];
 visibleSessions!:ISession[];
  @Input() filterBy!:string;
  @Input() sortBy!:string;

  constructor() { }
  ngOnChanges()  {
   if(this.sessions){    
     this.filterSessions(this.filterBy)
     console.log("sortBy",this.sortBy);
     
     this.sortBy=='name'? this.visibleSessions.sort(this.sortByNameAsc):this.visibleSessions.sort(this.sortByVotesDes)
   }
  }
  filterSessions(filter:any){
    if(filter=='all'){
      this.visibleSessions=this.sessions.slice(0);
    }else{
      this.visibleSessions=this.sessions.filter(session=>{
        return  session.level.toLocaleLowerCase()==filter
      })
    }

  }
  sortByNameAsc(s1:ISession, s2:ISession){
    if(s1.name>s2.name) return 1
    else if(s1.name==s2.name) return 0
    else return -1
  }
  sortByVotesDes(s1:ISession, s2:ISession){
     return s2.voters.length - s1.voters.length
  }



}
