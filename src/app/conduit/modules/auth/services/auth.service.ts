import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';
import {environment} from '../../../../../environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {LoginRequestInterface} from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    // console.log('[AuthService] register request');
    const url = environment.apiUrl + '/users';

    return this.httpClient.post<AuthResponseInterface>(url, data)
      .pipe(
        // tap(() => console.log('[AuthService] register response')),
        map(this.getUser)
      );
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    // console.log('[AuthService] login request', data);
    const url = environment.apiUrl + '/users/login';

    return this.httpClient.post<AuthResponseInterface>(url, data)
      .pipe(
        // tap(() => console.log('[AuthService] login response')),
        map(this.getUser)
      );
  }

  getUser(data: AuthResponseInterface): CurrentUserInterface {
    return data.user;
  }
}
