import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cn-sr-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {

  @Input() baseUrl: string;
  @Input() total: number;
  @Input() perPage: number;
  @Input() currentPage: number;

  constructor() { }

  ngOnInit(): void {
  }

}
