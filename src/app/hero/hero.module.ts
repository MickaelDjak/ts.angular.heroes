import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {HeroLoggerComponent} from './components/hero-logger/hero-logger.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';

import {HighlightDirective} from './directive/highlight.directive';

import {HeroesStorageService} from './services/heroes-storage/heroes-storage.service';
import {MessangerService} from './services/messanger/messanger.service';
import {InMemoryDataService} from './services/in-memory-data/in-memory-data.service';

import {HeroRoutingModule} from './hero-routing.module';
import { HeroAddComponent } from './components/hero-add/hero-add.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDatailComponent,
    HeroLoggerComponent,
    DashboardComponent,
    HeroSearchComponent,
    HighlightDirective,
    HeroAddComponent,
  ],
  imports: [
    BrowserModule,
    HeroRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
  ],
  providers: [
    HeroesStorageService,
    MessangerService,
  ]
})

export class HeroModule {
}
