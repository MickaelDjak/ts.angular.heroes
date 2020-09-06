import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';
import {environment} from '../../../../../environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    console.log('[AuthService] 1');
    const url = environment.apiUrl + '/users';

    return this.httpClient.post<AuthResponseInterface>(url, data)
      .pipe(
        tap(() => console.log('[AuthService] 2')),
        map((res: AuthResponseInterface): CurrentUserInterface => (res.user))
      );
  }
}
