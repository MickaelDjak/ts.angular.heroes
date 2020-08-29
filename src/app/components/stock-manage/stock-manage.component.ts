import {Component} from '@angular/core';

import {StockInterface, StocksService} from '../../services/stock-services/stocks.service';

@Component({
  selector: 'stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.scss']
})
export class StockManageComponent {
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbols) {
    this.symbols = this.service.remove(symbols);
  }
}
