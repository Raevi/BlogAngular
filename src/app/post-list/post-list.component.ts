import { Component, OnInit, Input } from '@angular/core';
import { PostService, Post } from '../model/PostService';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

  onReset(){
    this.postService.resetOnAll()
  }
}
