import {Component, OnInit, OnDestroy, Output} from '@angular/core';
import {Metric, Node} from '../../model/model';

@Component({
  selector: 'app-monitor-dashboard',
  templateUrl: './monitor-dashboard.component.html',
  styleUrls: ['./monitor-dashboard.component.css'],
  exportAs: 'monitorDashboard'
})
export class MonitorDashboardComponent implements OnInit, OnDestroy {
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  ngOnInit(): void {
    this.generateData();

    this.interval = setInterval(() => this.generateData(), 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = {used: 0, available: 0};
    this.mem = {used: 0, available: 0};

    for (let i = 1; i < 4; i++) {
      this.cluster1.push(this.randomNode(i));
    }

    for (let j = 1; j < 6; j++) {
      this.cluster2.push(this.randomNode(j));
    }
  }

  randomNode(i): Node {
    const node = {
      name: `Node #${i}`,
      cpu: {available: 16, used: this.randomInteger(16)},
      mem: {available: 48, used: this.randomInteger(48)},
    };

    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }


  randomInteger(max): number {
    return Math.floor(Math.random() * max) + 1;

  }

}
