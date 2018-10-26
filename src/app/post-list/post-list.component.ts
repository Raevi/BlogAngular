import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() public posts: Array<Post>

  constructor() { }

  ngOnInit() {
  }
}
