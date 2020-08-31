import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {StockRoutingModule} from './stock-routing.module';

import {StockSummaryComponent} from './components/stock-summary/stock-summary.component';
import {StockManageComponent} from './components/stock-manage/stock-manage.component';
import {StockDashboardComponent} from './components/stock-dashboard/stock-dashboard.component';
import {StockLayoutComponent} from './components/stock-layout/stock-layout.component';
import {StocksService} from './services/stock-services/stocks.service';

@NgModule({
  declarations: [
    StockSummaryComponent,
    StockDashboardComponent,
    StockManageComponent,
    StockLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StockRoutingModule,
  ],
  providers: [
    StocksService,
  ]
})
export class StockModule {
}
