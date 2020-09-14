import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './global-feed-list.component.html',
})
export class GlobalFeedListComponent {
  url: string = '/articles';
}
