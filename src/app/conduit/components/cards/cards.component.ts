import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  list: Array<null>;

  constructor() {
    this.list = [null, null, null, null, null, null];
  }

  ngOnInit(): void {
  }

}
