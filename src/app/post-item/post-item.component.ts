import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/PostService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  title: string = 'titre';
  content: string = 'contenu';

  constructor(private postService: PostService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const post = this.postService.getPostById(+id) //+ pour le cast en tant que chiffre
    if(post){
      this.title = post.title
      this.content = post.content
    } else {
      this.router.navigate(['/not-found'])
    }
  }
}
