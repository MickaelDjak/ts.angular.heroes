import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeeds} from '../../store/selectors';
import {getFeedAction} from '../../store/actions/getFeedAction';
import {FeedInterface} from '../../types/feed.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './feed-list.component.html',
})
export class FeedListComponent implements OnInit {

  list$: Observable<Array<FeedInterface>>;

  constructor(private state: Store) {
  }

  ngOnInit(): void {
    this.list$ = this.state.pipe(select(getFeeds));
    this.state.dispatch(getFeedAction({url: '/articles?limit=10&offset=0'}));
  }

}
