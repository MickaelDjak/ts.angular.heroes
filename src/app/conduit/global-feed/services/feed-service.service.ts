import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from '../types/getFeedResponse.interface';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  constructor(private httpService: HttpClient) {
  }

  getFeed(url: string, page = 1): Observable<GetFeedResponseInterface> {
    const limit = environment.perPage;
    const offset = limit * (page - 1);
    const fullUrlApi = environment.apiUrl + url + `?limit=${limit}&offset=${offset}`;

    return this.httpService.get<GetFeedResponseInterface>(fullUrlApi);
  }
}
