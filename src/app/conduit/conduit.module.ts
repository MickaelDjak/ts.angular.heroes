import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './shered/components/layout/layout.component';
import {ConduitRoutingModule} from './conduit-routing.module';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {FeedComponent} from './shered/components/feed/feed.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {PersistenceStorageService} from './shered/serices/persistence-storage.service';
import {TopBarComponent} from './shered/components/top-bar/top-bar.component';
import {AuthInterceptorService} from './shered/serices/auth-interceptor.service';
import { FeedListComponent } from './global-feed/components/feed-list/feed-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FeedComponent,
    TopBarComponent,
    FeedListComponent
  ],
  providers: [
    PersistenceStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  imports: [
    CommonModule,
    ConduitRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ]
})

export class ConduitModule {
}
