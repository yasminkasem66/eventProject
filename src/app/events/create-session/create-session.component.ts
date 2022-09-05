import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { ISession } from 'src/app/@AppService/models/sessions';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  createSessionForm!: FormGroup;
  sessionModel!: ISession ;
  @Output() saveNewSession =new EventEmitter()
  @Output() cancelAddSession =new EventEmitter()

  constructor(private router: Router
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createSessionForm = new FormGroup({
      // id: new FormControl((new Date()).getDate()),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      presenter: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      duration: new FormControl(null, Validators.required),
      level: new FormControl('', Validators.required),
      abstract: new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo','bar'])]),
      voters: new FormArray([]),
    })

  }

  get fc() {
    return this.createSessionForm?.controls

  }

  private restrictedWords(words:any) {
    return (control: FormControl): ValidationErrors | null=> {
      let invalidWords=words.map((w:any)=>control.value.includes(w) ? w : null)
      .filter((w:any)=>w!=null)
      return invalidWords&& invalidWords.length>0 ? { restrictedWord: invalidWords.join(',') } : null
    }
  }

  saveSession(formsValue: any) {
    this.sessionModel = formsValue;
    this.sessionModel.duration = Number(formsValue.duration);
    this.saveNewSession.emit( this.sessionModel)

    // this.eventService.saveEvent(formsValue)
    // this.isDirty=false;
    // this.router.navigate(['/events'])

  }
  cancel() {
    // this.router.navigate(['events'])
    this.cancelAddSession.emit()
  }

}
