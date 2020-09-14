import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FeedInterface} from '../../../global-feed/types/feed.interface';
import {select, Store} from '@ngrx/store';
import {getFeeds, isLoading} from '../../../global-feed/store/selectors';
import {getFeedAction} from '../../../global-feed/store/actions/getFeedAction';

@Component({
  selector: 'cn-sr-feed-list',
  templateUrl: './feed-list.component.html',
})
export class FeedListComponent implements OnInit {
  @Input() url: string;

  isLoading$: Observable<boolean>;
  list$: Observable<Array<FeedInterface>>;

  constructor(private state: Store) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.state.pipe(select(isLoading));
    this.list$ = this.state.pipe(select(getFeeds));

    this.state.dispatch(getFeedAction({url: this.url}));
  }
}
