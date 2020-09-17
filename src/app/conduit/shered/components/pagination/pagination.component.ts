import {Component, Input, OnInit} from '@angular/core';
import {PaginationPage, PaginationService} from '../../serices/pagination.service';

@Component({
  selector: 'cn-sr-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {

  @Input() baseUrl: string;
  @Input() total: number;
  @Input() perPage: number;
  @Input() currentPage: number;

  constructor(private paginationGenerator: PaginationService) {
  }

  ngOnInit(): void {
    console.log(this);
  }

  get pages(): Array<PaginationPage> {
    return this.paginationGenerator.pagination({
      total: this.total,
      perPage: this.perPage,
      current: this.currentPage
    });
  }
}
