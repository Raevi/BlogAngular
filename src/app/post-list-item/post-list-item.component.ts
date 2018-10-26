import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Post } from '../model/Post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    console.log('+1')
  }

  onDontLoveIt() {
    console.log('-1')
  }
}
