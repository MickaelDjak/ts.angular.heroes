import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalFeedListComponent} from './components/global-feed-list/global-feed-list.component';
import {FeedServiceService} from './services/feed-service.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer';
import {RouterModule} from '@angular/router';
import {SheredModule} from '../shered/shered.module';

@NgModule({
  declarations: [
    GlobalFeedListComponent,
  ],
  providers: [
    FeedServiceService
  ],
  imports: [
    SheredModule,
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
