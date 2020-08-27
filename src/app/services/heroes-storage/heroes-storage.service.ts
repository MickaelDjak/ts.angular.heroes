import {Injectable} from '@angular/core';
import {Hero} from '../../components/heroes/hero';
import {Observable, of} from 'rxjs';
import {MessangerService} from '../messanger/messanger.service';

let heroes: Array<Hero> = [
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

@Injectable({
  providedIn: 'root'
})
export class HeroesStorageService {

  constructor(public messenger: MessangerService) {
  }

  get(): Observable<Hero[]> {
    this.messenger.add('HeroService: fetched heroes');
    return of(heroes);
  }
}
