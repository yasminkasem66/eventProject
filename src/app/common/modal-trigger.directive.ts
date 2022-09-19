import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../@AppService/services/jQ.service';


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
   el: HTMLElement;
   @Input('modal-trigger') modalId!:string

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $:any) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    console.log(this.el);
    
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({})

    })
  }

}
