import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalFeedListComponent} from './components/global-feed-list/global-feed-list.component';
import {FeedServiceService} from './services/feed-service.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer';
import {FeedComponent} from '../shered/components/feed/feed.component';
import {RouterModule} from '@angular/router';
import {FeedListComponent} from '../shered/components/feed-list/feed-list.component';
import {TopBarComponent} from '../shered/components/top-bar/top-bar.component';
import {SpinnerComponent} from '../shered/components/spinner/spinner.component';

@NgModule({
  declarations: [
    GlobalFeedListComponent,
    FeedComponent,
    FeedListComponent,
    SpinnerComponent
  ],
  providers: [
    FeedServiceService
  ],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([
      GetFeedEffect
    ]),
  ]
})
export class GlobalFeedModule {
}
