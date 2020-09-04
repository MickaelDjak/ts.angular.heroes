import {Component} from '@angular/core';
import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'hero-add',
  templateUrl: './hero-add.component.html',
})
export class HeroAddComponent {

  constructor(private storage: StorageService) {
  }

  add(name: string): void {
    this.storage.add({id: 14, name});
  }
}
