import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {PersistenceStorageService} from './serices/persistence-storage.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './serices/auth-interceptor.service';
import {RouterModule} from '@angular/router';
import {BannerComponent} from './components/banner/banner.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {PaginationService} from './serices/pagination.service';
import {TagListComponent} from './components/tag-list/tag-list.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    TopBarComponent,
    BannerComponent,
    PaginationComponent,
    TagListComponent,
  ],
  exports: [
    SpinnerComponent,
    TopBarComponent,
    BannerComponent,
    PaginationComponent,
    TagListComponent,
  ],
  providers: [
    PersistenceStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    PaginationService
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SheredModule {
}
