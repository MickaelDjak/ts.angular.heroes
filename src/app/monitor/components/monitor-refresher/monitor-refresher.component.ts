import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-monitor-refresher',
  templateUrl: './monitor-refresher.component.html',
  styleUrls: ['./monitor-refresher.component.css']
})
export class MonitorRefresherComponent {
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  refresh(): void {
    this.onRefresh.emit();
  }
}
