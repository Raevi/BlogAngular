import { Component, Input } from '@angular/core';
import { PostService, Post } from '../model/PostService';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) { }

  onLoveIt(value: number) {
    this.postService.incrementLikeItOf(this.index, value);
  }
}
