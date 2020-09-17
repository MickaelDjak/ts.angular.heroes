import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {FeedInterface} from '../../../global-feed/types/feed.interface';
import {select, Store} from '@ngrx/store';
import {getFeedNumber, getFeeds, isLoading} from '../../../global-feed/store/selectors';
import {getFeedAction} from '../../../global-feed/store/actions/getFeedAction';
import {environment} from '../../../../../environments/environment';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'cn-sr-feed-list',
  templateUrl: './feed-list.component.html',
})
export class FeedListComponent implements OnInit, OnDestroy {
  @Input() url: string;

  isLoading$: Observable<boolean>;
  feeds$: Observable<Array<FeedInterface>>;
  totalFeedNumber$: Observable<number>;

  subscriptionOnParams: Subscription;

  feedPerPage: number = environment.perPage;
  currentPage: number;
  baseUrl: string;

  constructor(
    private state: Store,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
    this.initializeListeners();
    this.initializeData();
  }

  initializeValue(): void {
    this.isLoading$ = this.state.pipe(select(isLoading));
    this.feeds$ = this.state.pipe(select(getFeeds));
    this.totalFeedNumber$ = this.state.pipe(select(getFeedNumber));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeData(): void {
    this.state.dispatch(getFeedAction({
      url: this.url,
      page: this.currentPage
    }));
  }

  initializeListeners(): void {
    this.subscriptionOnParams = this.activateRoute.queryParamMap.subscribe((data: ParamMap) => {
      this.currentPage = Number(data.get('page') || '1');

      this.initializeData();
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOnParams.unsubscribe();
  }
}
