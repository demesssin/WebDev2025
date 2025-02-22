import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <div>
    App User Page
    <p> User's name is {{name}}</p>
  </div>

  `
})
export class UserComponent {
  name = "Demesssin";
}
