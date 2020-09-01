import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DangerDetectorService} from '../../services/dangerDetector/danger-detector.service';

@Component({
    selector: 'app-monitor-metric',
    templateUrl: './monitor-metric.component.html',
    styleUrls: ['./monitor-metric.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorMetricComponent implements OnChanges {
    @Input() used: number;
    @Input() available: number;

    constructor(private dangerDetector: DangerDetectorService) {
    }

    isDanger(): boolean {
        return this.dangerDetector.isDanger(this.used, this.available);
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
