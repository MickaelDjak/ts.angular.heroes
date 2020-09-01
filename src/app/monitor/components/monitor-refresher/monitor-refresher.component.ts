import {Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-monitor-refresher',
  templateUrl: './monitor-refresher.component.html',
  styleUrls: ['./monitor-refresher.component.css']
})
export class MonitorRefresherComponent implements AfterViewInit {

  @Output() onRefresh: EventEmitter<Date> = new EventEmitter<Date>();

  @ViewChild('monitorHeaderName', {static: false}) monitorHeaderName: ElementRef;

  refresh(): void {
    this.onRefresh.emit(new Date());
  }

  ngAfterViewInit(): void {
    this.monitorHeaderName.nativeElement.textContent = 'Monitor dashboard ';
  }
}
