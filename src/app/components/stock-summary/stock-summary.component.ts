import { Component, Input } from '@angular/core';

@Component({
  selector: 'stock-summary',
  styleUrls: ['./stock-summary.component.css'],
  templateUrl: './stock-summary.component.html'
})
export class StockSummaryComponent {
  @Input() stock: any;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
}
