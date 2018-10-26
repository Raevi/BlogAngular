import { Component } from '@angular/core';
import { Post } from './model/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  LoadPost(){
    let posts: Array<Post> = [   
      new Post("Mon Premier Post", 
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra eget orci at vehicula. Ut tristique augue sit amet volutpat eleifend. Suspendisse ut convallis nunc, id placerat felis.", 
               new Date(2017, 12, 24, 15, 30, 0), 1, 1),
      new Post("Mon Deuxième Post", 
              "Quisque eget felis luctus, ultricies augue eget, faucibus ex. Nam quis pellentesque diam. Cras et fringilla orci. Etiam mi risus, dictum nec mollis a, lacinia sit amet mauris", 
              new Date(2015, 8, 3, 9, 41, 20), 2, 0),
      new Post("Mon Troisième Post", 
               "Sed sodales enim sed velit viverra varius. Vivamus in dictum nunc, at tristique diam. Sed et metus tempor ligula tempor egestas. Ut porta cursus laoreet", 
               new Date(218, 10, 25, 13, 47, 13), 3, -1),
    ];
    return posts;
  }
}
