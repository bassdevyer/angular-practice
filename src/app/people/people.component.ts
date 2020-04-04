import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  //styleUrls: ['./people.component.css']
  styles: [`
  h1 {
    color: blue
  }
  `]
})
export class PeopleComponent {

  addPerson = false;

  constructor(){
    setTimeout(
      () => {
        this.addPerson = true;
      }
      , 3000);
  }

}
