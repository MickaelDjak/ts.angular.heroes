import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {MonitorModule} from './monitor/monitor.module';
import {HeroModule} from './hero/hero.module';
import {VoterModule} from './voter/voter.module';
import {AstronautModule} from './astronaut/astronaut.module';
import {StockModule} from './stock/stock.module';
import {OtherModule} from './other/other.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MonitorModule,
    HeroModule,
    VoterModule,
    AstronautModule,
    StockModule,
    OtherModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
