import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalFeedListComponent} from './components/global-feed-list/global-feed-list.component';
import {FeedServiceService} from './services/feed-service.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {GetTagEffect} from './store/effects/getTag.effect';
import {StoreModule} from '@ngrx/store';
import {reducers as feedReduce} from './store/reducers/feedReducer';
import {reducers as tagReduce} from './store/reducers/tagReducer';
import {RouterModule} from '@angular/router';
import {SheredModule} from '../shered/shered.module';
import {FeedComponent} from './components/feed/feed.component';
import {FeedListComponent} from './components/feed-list/feed-list.component';
import {PopularTagListComponent} from './components/popular-tag-list/popular-tag-list.component';
import {TagFetcherService} from './services/tag-fetcher.service';

@NgModule({
  declarations: [
    GlobalFeedListComponent,
    FeedComponent,
    FeedListComponent,
    PopularTagListComponent
  ],
  providers: [
    FeedServiceService,
    TagFetcherService
  ],
  imports: [
    SheredModule,
    CommonModule,
    RouterModule,
    StoreModule.forFeature('feed', feedReduce),
    StoreModule.forFeature('tag', tagReduce),
    EffectsModule.forFeature([
      GetFeedEffect,
      GetTagEffect
    ]),
  ]
})
export class GlobalFeedModule {
}
