import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-monitor-metric',
  templateUrl: './monitor-metric.component.html',
  styleUrls: ['./monitor-metric.component.css']
})
export class MonitorMetricComponent {
  @Input() name: string;
  @Input() description: string;
  private _used: number;
  private _available: number;

  @Input() set used(value: number) {
    if (isNaN(value)) {
      value = 0;
    }
    this._used = value;
  }

  get used(): number {
    return this._used;
  }

  @Input() set available(value: number) {
    if (isNaN(value)) {
      value = 100;
    }
    this._available = value;
  }

  get available(): number {
    return this._available;
  }

  isDanger(): boolean {
    return this.used / this.available > 0.7;
  }
}
