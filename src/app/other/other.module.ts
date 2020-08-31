import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {OtherRoutingModule} from './other-routing.module';

import {ObservableComponent} from './components/observable/observable.component';
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ObservableComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    OtherRoutingModule,
    FormsModule,
  ],
})
export class OtherModule { }
