import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero-layout/hero';
import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private service: StorageService,
    private router: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.service.getOne(id).subscribe(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(name: string): void {
    console.log(name);
    this.service.update({id: this.hero.id, name});
  }

}
