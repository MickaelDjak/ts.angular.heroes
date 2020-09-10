import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './feed-list.component.html',
})
export class FeedListComponent implements OnInit {

  list: Array<null>;

  constructor() {
  }

  ngOnInit(): void {
    this.list = [null, null, null, null, null, null, null, null, null];
  }

}
