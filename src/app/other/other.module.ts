import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {OtherRoutingModule} from './other-routing.module';

import {ObservableComponent} from './components/observable/observable.component';


@NgModule({
  declarations: [
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    OtherRoutingModule,
  ],
})
export class OtherModule { }
