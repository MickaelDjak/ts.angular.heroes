import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {FormsModule} from '@angular/forms';

import {HeroesStorageService} from './services/heroes-storage/heroes-storage.service';
import { HeroDatailComponent } from './components/hero-datail/hero-datail.component';
import {MessangerService} from './services/messanger/messanger.service';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDatailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroesStorageService,
    MessangerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
