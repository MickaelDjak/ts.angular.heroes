import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];

const service = 'https://angular2-in-action-api.herokuapp.com';

const data: Array<StockInterface> = [
  {
    symbol: "AAPL",
    lastTradePriceOnly: 499.23,
    change: -0.80999756,
    changeInPercent: -0.0016198657
  },
  {
    symbol: "GOOG",
    lastTradePriceOnly: 1644.41,
    change: 10.080078,
    changeInPercent: 0.0061677126
  },
  {
    symbol: "FB",
    lastTradePriceOnly: 293.66,
    change: 0,
    changeInPercent: 0
  },
  {
    symbol: "AMZN",
    lastTradePriceOnly: 3401.8,
    change: 1.8000488,
    changeInPercent: 0.00052942615
  },
  {
    symbol: "TWTR",
    lastTradePriceOnly: 41.07,
    change: 0.6800003,
    changeInPercent: 0.016835859
  }
];

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) {
  }

  get() {
    return stocks.slice();
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);

    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return of(data.filter(item => stocks.filter(stock => stock === item.symbol ).length !== 0  ));
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
