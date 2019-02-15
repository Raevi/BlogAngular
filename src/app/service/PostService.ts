import { Subject } from 'rxjs/Rx';

export class PostService  { 
  
    postSubject = new Subject<any[]>();
  
    private posts: Post[] = [   
        new Post("Mon Premier Post", 
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra eget orci at vehicula. Ut tristique augue sit amet volutpat eleifend. Suspendisse ut convallis nunc, id placerat felis.", 
                 new Date(2017, 12, 24, 15, 30, 0), 1),
        new Post("Mon Deuxième Post", 
                "Quisque eget felis luctus, ultricies augue eget, faucibus ex. Nam quis pellentesque diam. Cras et fringilla orci. Etiam mi risus, dictum nec mollis a, lacinia sit amet mauris", 
                new Date(2015, 8, 3, 9, 41, 20), 2),
        new Post("Mon Troisième Post", 
                 "Sed sodales enim sed velit viverra varius. Vivamus in dictum nunc, at tristique diam. Sed et metus tempor ligula tempor egestas. Ut porta cursus laoreet", 
                 new Date(218, 10, 25, 13, 47, 13), 3),
      ];   

    emitPostSubject(){
        this.postSubject.next(this.posts.slice())
    }

    resetOnAll() {
        for(let post of this.posts) {
          post.loveIts = 0;
        }
        this.emitPostSubject();
    }

    incrementLikeItOf(index: number, value: number) {
        this.posts[index].loveIts += value;
        this.emitPostSubject();
    }

    getPostById(id: number){
        const post = this.posts.find((postObj) => {
            return postObj.id === id
        });
        return post;
    }
  }
  
  export class Post{
    id: number
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title:string, content:string, create_at:Date, id:number,){
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = create_at;
        this.loveIts = 0;
    }
  }