import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {ConduitRoutingModule} from './conduit-routing.module';

import {SheredModule} from './shered/shered.module';
import {LayoutComponent} from './layout.component';
import {AuthModule} from './auth/auth.module';
import {GlobalFeedModule} from './global-feed/global-feed.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  providers: [],
  exports: [],
  imports: [
    CommonModule,
    ConduitRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    SheredModule,
    AuthModule,
    GlobalFeedModule,
  ]
})

export class ConduitModule {
}
