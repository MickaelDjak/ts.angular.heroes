import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {MissionControlComponent} from './components/mission-control/mission-control.component';
import {AstronautComponent} from './components/astronaut/astronaut.component';
import {AstronautRoutingModule} from './astronaut-routing.module';
import {MissionService} from './services/mission/mission.service';

@NgModule({
  declarations: [
    MissionControlComponent,
    AstronautComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AstronautRoutingModule
  ],
  providers: [
    MissionService
  ]
})
export class AstronautModule { }
