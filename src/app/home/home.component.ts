import { Component, OnInit } from '@angular/core';
//import { trigger, style, transition, animate, keyframes, query, stragger } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  /* animations: [
    trigger('cosas', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional:true}),

        query(':enter', stragger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform:'translateY(-75%)', offset: 0}),
            style({opacity:.5, transform:'translateY(35px)', offset: .3}),
            style({opacity:1, transform:'translateY(0)', offset: 1})
          ]))
        ]), {optional:true})
      ])
    ])
  ] */
})
export class HomeComponent implements OnInit {
  counter: number = 1;
  texto: string = "Añadir";
  todo: string="";
  cosas = [];
  constructor() { }

  ngOnInit(): void {
    this.counter = this.cosas.length;
  }

  agregar(){
    this.cosas.push(this.todo);
    this.todo = "";
    this.counter += 1;
  }
  eliminarItm(i){
    this.cosas.splice(i,1);
    this.counter = this.cosas.length;
  }

}
