import {Component, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef} from '@angular/core';
import {MonitorDashboardComponent} from '../monitor-dashboard/monitor-dashboard.component';
import {AlertComponent} from '../alert/alert.component';

@Component({
  selector: 'app-monitor-layout',
  templateUrl: './monitor-layout.component.html',
  styleUrls: ['./monitor-layout.component.css']
})
export class MonitorLayoutComponent {
  alertRef: ComponentRef<AlertComponent>;
  @ViewChild(MonitorDashboardComponent) dashboard: MonitorDashboardComponent;
  @ViewChild('alertBox', {read: ViewContainerRef}) alertBox: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  alert(date: Date): void {
    if (!this.alertRef) {
      const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory<AlertComponent>(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponentFactory);

    }

    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(() => {
      this.destroyAlert();
    }, 3000);
  }

  destroyAlert(): void {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }


  refreshing(event): void {
    this.dashboard.generateData();
    this.alert(event);
  }
}
