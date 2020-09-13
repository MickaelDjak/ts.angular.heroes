import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedListComponent} from './components/feed-list/feed-list.component';
import {FeedServiceService} from './services/feed-service.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer';
import {FeedComponent} from '../shered/components/feed/feed.component';

@NgModule({
  declarations: [
    FeedListComponent,
    FeedComponent,
  ],
  providers: [
    FeedServiceService
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([
      GetFeedEffect
    ]),
  ]
})
export class GlobalFeedModule {
}
