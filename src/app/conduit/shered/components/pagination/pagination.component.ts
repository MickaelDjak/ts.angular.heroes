import {Component, Input} from '@angular/core';
import {PaginationPage, PaginationService} from '../../serices/pagination.service';

@Component({
  selector: 'cn-sr-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {

  @Input() baseUrl: string;
  @Input() total: number;
  @Input() perPage: number;
  @Input() currentPage: number;

  constructor(private paginationGenerator: PaginationService) {
  }

  get pages(): Array<PaginationPage> {
    return this.paginationGenerator.pagination({
      total: Number(this.total),
      perPage: Number(this.perPage),
      current: Number(this.currentPage)
    });
  }
}
