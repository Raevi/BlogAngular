import { Component, OnInit, Input } from '@angular/core';
import { PostService, Post } from '../service/PostService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[]
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe((posts: any[]) => {
      this.posts = posts;
    });
    this.postService.emitPostSubject();
  }

  onReset(){
    this.postService.resetOnAll()
  }
}
