import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {VoterComponent} from './components/voter/voter.component';
import {VotetakerComponent} from './components/votetaker/votetaker.component';

import {VoterRoutingModule} from './voter-routing.module';

@NgModule({
  declarations: [
    VoterComponent,
    VotetakerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VoterRoutingModule
  ],
})

export class VoterModule {
}
