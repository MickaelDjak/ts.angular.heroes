import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroesStorageService} from '../../services/heroes-storage/heroes-storage.service';
import {Hero} from '../heroes/hero';


@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private service: HeroesStorageService,
    private router: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.hero)
      .subscribe(() => this.goBack());
  }

}
