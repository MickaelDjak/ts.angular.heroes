import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {FeedInterface} from '../../types/feed.interface';
import {select, Store} from '@ngrx/store';
import {getFeedNumber, getFeeds, isLoading} from '../../store/selectors/feedSelectors';
import {getFeedAction} from '../../store/actions/getFeedAction';
import {environment} from '../../../../../environments/environment';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'cn-sr-feed-list',
  templateUrl: './feed-list.component.html',
})
export class FeedListComponent implements OnInit, OnDestroy {
  @Input() url: string;
  tag: string;

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
    private activateRouted: ActivatedRoute,
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
    this.baseUrl = this.router.url.split('?')[0] || 'test';

    this.activateRouted.queryParamMap.subscribe((map) => {
      if (map.has('tag')) {
        this.tag = map.get('tag');
      }
    });
  }

  initializeData(): void {
    this.fetchFeed();
  }

  initializeListeners(): void {
    this.subscriptionOnParams = this.activateRouted.queryParamMap.subscribe((data: ParamMap) => {
      this.currentPage = Number(data.get('page') || '1');

      this.fetchFeed();
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOnParams.unsubscribe();
  }

  fetchFeed(): void {
    this.state.dispatch(getFeedAction({
      url: this.url,
      tag: this.tag,
      page: this.currentPage
    }));
  }
}
