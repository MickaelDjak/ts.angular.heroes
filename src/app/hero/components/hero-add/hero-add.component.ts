import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'hero-add',
  templateUrl: './hero-add.component.html',
})
export class HeroAddComponent {

  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();

  add(name: string) {
    this.onAdd.emit(name);
  }
}
