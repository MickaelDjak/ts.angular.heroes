import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

import {HeroesStorageService} from './services/heroes-storage/heroes-storage.service';
import {HeroDatailComponent} from './components/hero-datail/hero-datail.component';
import {MessangerService} from './services/messanger/messanger.service';
import {HeroLoggerComponent} from './components/hero-logger/hero-logger.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HighlightDirective } from './directive/highlight.directive';
import { VoterComponent } from './components/voter/voter.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { ObservableComponent } from './components/observable/observable.component';
import { HeroNavigationComponent } from './components/hero-navigation/hero-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDatailComponent,
    HeroLoggerComponent,
    DashboardComponent,
    HeroSearchComponent,
    HighlightDirective,
    VoterComponent,
    VotetakerComponent,
    MissionControlComponent,
    AstronautComponent,
    ObservableComponent,
    HeroNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false } )
  ],
  providers: [
    HeroesStorageService,
    MessangerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
