import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersistenceStorageService} from './persistence-storage.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private persistenceStorage: PersistenceStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceStorage.get('accessToken');

    const updatedReq = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    });

    return next.handle(updatedReq);
  }
}
