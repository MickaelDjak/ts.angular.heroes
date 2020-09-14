import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './shered/components/layout/layout.component';
import {ConduitRoutingModule} from './conduit-routing.module';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {PersistenceStorageService} from './shered/serices/persistence-storage.service';
import {TopBarComponent} from './shered/components/top-bar/top-bar.component';
import {AuthInterceptorService} from './shered/serices/auth-interceptor.service';
import {GlobalFeedModule} from './global-feed/global-feed.module';
import {SpinnerComponent} from './shered/components/spinner/spinner.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent
  ],
  providers: [
    PersistenceStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ConduitRoutingModule,
    AuthModule,
    GlobalFeedModule,
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
