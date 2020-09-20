import {Component, Input, OnInit} from '@angular/core';
import {FeedInterface} from '../../types/feed.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {

  @Input() feed: FeedInterface;

  ngOnInit(): void {
  }

}
