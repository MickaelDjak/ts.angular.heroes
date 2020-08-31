import {Component, Input} from '@angular/core';
import {Node} from '../monitor-dashboard/monitor-dashboard.component';

@Component({
  selector: '[app-monitor-node-row]',
  templateUrl: './monitor-node-row.component.html',
  styleUrls: ['./monitor-node-row.component.css']
})
export class MonitorNodeRowComponent {
  @Input() node: Node;

  isDanger(type: string): boolean {
    return this.node[type].used / this.node[type].available > 0.7;
  }
}
