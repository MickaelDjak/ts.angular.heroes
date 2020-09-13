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

  getFeed(url): Observable<GetFeedResponseInterface> {
    const fullUrlApi = environment.apiUrl + url;

    return this.httpService.get<GetFeedResponseInterface>(fullUrlApi);
  }
}
