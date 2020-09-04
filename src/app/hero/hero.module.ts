import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {HeroLayoutComponent} from './components/hero-layout/hero-layout.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {HeroLoggerComponent} from './components/hero-logger/hero-logger.component';
import {HeroLeaderListComponent} from './components/hero-leader-list/hero-leader-list.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';

import {HighlightDirective} from './directive/highlight.directive';

import {MessangerService} from './services/messanger/messanger.service';
import {StorageService} from './services/storage/storage.service';

import {HeroRoutingModule} from './hero-routing.module';
import {HeroAddComponent} from './components/hero-add/hero-add.component';


@NgModule({
  declarations: [
    HeroLayoutComponent,
    HeroDatailComponent,
    HeroLoggerComponent,
    HeroLeaderListComponent,
    HeroSearchComponent,
    HighlightDirective,
    HeroAddComponent,
  ],
  imports: [
    BrowserModule,
    HeroRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MessangerService,
    StorageService
  ]
})

export class HeroModule {
}
