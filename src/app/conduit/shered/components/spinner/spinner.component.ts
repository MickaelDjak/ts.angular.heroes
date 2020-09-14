import {Component, Input, OnInit} from '@angular/core';
import {FeedInterface} from '../../../global-feed/types/feed.interface';

@Component({
  selector: 'cn-sr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() feed: FeedInterface;

  ngOnInit(): void {
  }

}
