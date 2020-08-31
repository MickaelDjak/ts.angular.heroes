import {Component} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
    {id: 3, name: 'Callback'},
    {id: 4, name: 'Letter'},
  ];

  log() {
    console.log();
  }

  submit(data) {
    console.log(data);
  }
}
