import {Component, Input, OnInit} from '@angular/core';
import {TagTypeInterface} from '../../types/tagType.interface';

@Component({
  selector: 'cn-sr-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() tagList: Array<TagTypeInterface>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
