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
  addPersonStatus = 'No people added yet';
  title = 'Engineer';
  personCreated = false;

  constructor(){
    setTimeout(
      () => {
        this.addPerson = true;
      }
      , 3000);
  }

  onCreatePerson(){
    this.personCreated = true;
    this.addPersonStatus = 'Person added';
  }

  onModifyPerson(event: Event){
    this.title = (<HTMLInputElement>event.target).value;
  }

}
