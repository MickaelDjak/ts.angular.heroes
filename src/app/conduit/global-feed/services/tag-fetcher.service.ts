import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {TagTypeInterface} from '../../shered/types/tagType.interface';
import {TagListResponseInterface} from '../types/tagListResponse.interface';
import {filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagFetcherService {

  constructor(private httpService: HttpClient) {
  }

  public getList(): Observable<Array<TagTypeInterface>> {
    const fullUlr = environment.apiUrl + '/tags';

    return this.httpService.get<TagListResponseInterface>(fullUlr)
      .pipe(
        map((data: TagListResponseInterface): Array<TagTypeInterface> => data.tags),
        // filter((data: Array<TagTypeInterface>): Array<TagTypeInterface> => data.filter(el => el.length > 0)),
        // tap(data => console.log(data))
      );
  }
}
