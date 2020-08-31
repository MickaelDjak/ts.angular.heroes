import { Component, OnInit } from '@angular/core';
import {StockInterface, StocksService} from '../../services/stock-services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit(): void {
    this.service.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);
  }

}

