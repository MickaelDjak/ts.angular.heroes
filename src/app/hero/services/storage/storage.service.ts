import {Injectable} from '@angular/core';
import {Hero} from '../../components/hero-layout/hero';
import {MessangerService} from '../messanger/messanger.service';
import {Observable, Subject, BehaviorSubject, of, from} from 'rxjs';
import {catchError, debounceTime, delay, distinct, filter, map, scan, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  heroListData$: Observable<Array<Hero>>;

  private heroListSubject: Subject<Array<Hero>>;

  private state = [
    {id: 11, name: 'Dr Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];

  constructor(private logger: MessangerService) {
    this.heroListSubject = new BehaviorSubject<Array<Hero>>(this.state);
    this.heroListSubject.pipe(
      delay(500),
      catchError(this.handleError<Hero>('deleteHero'))
    );

    this.heroListData$ = this.heroListSubject.asObservable();
    this.heroListSubject.next(this.state);
  }

  private notify(): void {
    this.logger.add('Storage: notify');
    this.heroListSubject.next(this.state);
  }


  // get(): Observable<Array<Hero>> {
  //   this.heroListSubject.next(this.state);
  //   return this.heroListData$
  //     .pipe(
  //       delay(500),
  //       tap(_ => this.logger.add('Storage: fetched hero all ')),
  //       catchError(this.handleError<Hero[]>('getHeroList', []))
  //     );
  // }

  getOne(heroId): Observable<Hero> {
    return from(this.state)
      .pipe(
        filter(hero => hero.id === heroId),
        take(1),
        tap(_ => this.logger.add(`Storage: fetched hero # ${heroId}`)),
        catchError(this.handleError<Hero>('getOneHero'))
      );
  }

  update(hero): void {
    this.logger.add(`Storage: update hero #${hero.id}`);

    this.state = this.state.map(el => el.id === hero.id ? hero : el);
    this.notify();
  }

  add(hero: Hero): void {
    this.logger.add(`Storage: Add hero id=${hero.id}`);

    this.state = [...this.state, hero];
    this.notify();
  }

  delete(hero: Hero): void {
    this.logger.add(`Storage: delete hero id=${hero.id}`);

    this.state = this.state.filter(el => el.id !== hero.id);
    this.notify();
  }

  search(term: string): Observable<Array<Hero>> {
    term = term.trim();
    if (!term) {
      return of([]);
    }
    const regExp = new RegExp(`${term}`, 'gi');

    return this.heroListData$
      .pipe(
        debounceTime(500),
        scan((acc, heroes: Array<Hero>) => heroes.filter(hero => hero.name.match(regExp)), []),
        tap((x) => {
          const message = x.length ? `find something` : `does not contain`;
          this.logger.add(`Storage: search ${message}`);
        })
      );
  }

  handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} field: ${error.message}`);

      return of(result as T);
    };
  }
}
