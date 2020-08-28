import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroesStorageService} from '../../services/heroes-storage/heroes-storage.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Hero>;

  constructor(private storage: HeroesStorageService) {
  }

  ngOnInit(): void {
    this.storage.get().subscribe(heroes => this.heroes = heroes);
  }

  add(name): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.storage.add({name} as Hero).subscribe(
      hero => this.heroes.push(hero)
    );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.storage.delete(hero).subscribe();
  }

  search(term: string) {
    this.storage.search(term).subscribe(heroes => this.heroes = heroes);
  }
}
