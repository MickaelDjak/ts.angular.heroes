import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './components/feed/feed.component';
import {FeedListComponent} from './components/feed-list/feed-list.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {PersistenceStorageService} from './serices/persistence-storage.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './serices/auth-interceptor.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FeedComponent,
    FeedListComponent,
    SpinnerComponent,
    TopBarComponent
  ],
  exports: [
    FeedComponent,
    FeedListComponent,
    SpinnerComponent,
    TopBarComponent,
  ],
  providers: [
    PersistenceStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SheredModule {
}
