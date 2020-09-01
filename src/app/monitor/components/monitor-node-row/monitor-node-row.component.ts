import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Node} from '../../model/model';
import {DangerDetectorService} from '../../services/dangerDetector/danger-detector.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NodeDetailComponent} from '../node-detail/node-detail.component';

@Component({
  selector: '[app-monitor-node-row]',
  templateUrl: './monitor-node-row.component.html',
  styleUrls: ['./monitor-node-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorNodeRowComponent {
  @Input() node: Node;

  constructor(private modalService: NgbModal, private dangerDetector: DangerDetectorService) {
  }

  isDanger(type: string): boolean {
    return this.dangerDetector.isDanger(this.node[type].used, this.node[type].available);
  }

  open(node: Node): void {
    const modal = this.modalService.open(NodeDetailComponent);
    modal.componentInstance.node = this.node;
  }
}
