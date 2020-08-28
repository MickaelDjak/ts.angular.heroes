import {Injectable} from '@angular/core';
import {Hero} from '../../components/heroes/hero';
import {Observable, of} from 'rxjs';
import {MessangerService} from '../messanger/messanger.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesStorageService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private messenger: MessangerService, private http: HttpClient) {
  }

  get(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.messenger.add('HeroService: fetched all heroes')),
        catchError(this.handleError<Hero[]>('getHeros', []))
      );
  }

  getOne(id): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(_ => this.messenger.add(`HeroService: fetched hero # ${id}`)),
      catchError(this.handleError<Hero>('getOneHero'))
    );
  }

  update(hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => (this.messenger.add(`HeroService: update hero #${hero.id}`))),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  add(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.messenger.add(`added hero id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  delete(hero: Hero | number): Observable<Hero> {
    const heroId = typeof hero === 'number' ? hero : hero.id;
    return this.http.delete<Hero>(`${this.heroesUrl}/${heroId}`, this.httpOptions).pipe(
      tap(() => this.messenger.add(`delete hero id=${heroId}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  search(term: string): Observable<Hero[]> {
    term = term.trim();
    if (!term) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap((x) => x.length ? this.messenger.add(`We something find`) : this.messenger.add(`We find nothing`)),
        catchError(this.handleError<Hero[]>('searchHero', []))
      );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.error(`${operation} field: ${error.message}`);


      return of(result as T);
    };

  }
}
