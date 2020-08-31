import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-monitor-metric',
  templateUrl: './monitor-metric.component.html',
  styleUrls: ['./monitor-metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorMetricComponent implements OnChanges {
  @Input() used: number;
  @Input() available: number;

  isDanger(): boolean {
    return this.used / this.available > 0.7;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.used && isNaN(changes.used.currentValue)) {
      this.used = 0;
    }

    if (changes.available && isNaN(changes.available.currentValue)) {
      this.available = 0;
    }
  }
}
