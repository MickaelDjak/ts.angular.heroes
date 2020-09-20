import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeedListResponseInterface} from '../types/feedListResponse.interface';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  constructor(private httpService: HttpClient) {
  }

  getFeed(url: string, tag = '', page = 1): Observable<FeedListResponseInterface> {
    const limit = environment.perPage;
    const offset = limit * (page - 1);
    const tagPart = tag ? `tag=${tag}&` : '';
    const fullUrlApi = environment.apiUrl + url + `?${tagPart}limit=${limit}&offset=${offset}`;
    console.log(fullUrlApi);

    return this.httpService.get<FeedListResponseInterface>(fullUrlApi);
  }
}
