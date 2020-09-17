import {Injectable} from '@angular/core';

export interface PaginationRequest {
  total: number;
  perPage: number;
  current: number;
}

export  interface PaginationPage {
  value: number | string;
  isSeparator: boolean;
  isSelected: boolean;
}

@Injectable()
export class PaginationService {

  private SEPARATOR = `...`;

  /**
   * Generates pagination Array
   */
  pagination({total, perPage, current = 1}: PaginationRequest): Array<PaginationPage> {
    const pages = Math.ceil(total / perPage);

    if (isNaN(total)) {
      throw new Error('Total param should be number');
    }

    if (isNaN(perPage)) {
      throw new Error('perPage param should be number');
    }

    return this.generatePagination(pages, current);
  }

  /**
   * Adds separator
   */
  private addSeparator(current, page, offset): string | null {
    return Math.abs(page - current) > offset ? this.SEPARATOR : null;
  }

  /**
   * generates short pagination array with first 10 elements, placeholder for middElements and last element
   */
  private generatePagination(pages: number, current: number): Array<PaginationPage> {

    const maxNumberOfElements = 7;
    const firstPage = 1;
    const lastPage = pages;
    const offset = Math.ceil(maxNumberOfElements / 2);

    const offsetLeft = [...Array(offset).keys()]
      .map((value, index) => Math.abs(value - current) <= firstPage || Math.abs(value - current) === current ? null : Math.abs(value - current))
      .reverse();

    const offsetRight = [...Array(offset).keys()]
      .map((value, index) => (current + value) >= lastPage || (current + value) === current ? null : (current + value));

    const pagination: Array<string | number> = [
      firstPage,
      this.addSeparator(current, firstPage, offset),
      ...offsetLeft,
      current !== firstPage && current !== lastPage ? current : null,
      ...offsetRight,
      this.addSeparator(current, lastPage, offset),
      lastPage
    ];

    return pagination
      .filter(item => item !== null)
      .map((item: string | number): PaginationPage => {
        return {
          value: item,
          isSeparator: item === this.SEPARATOR,
          isSelected: item === current
        };
      });
  }
}

