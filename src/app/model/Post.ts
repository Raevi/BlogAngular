export class Post  {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  
    constructor(title:string, content:string, create_at:Date){
        this.title = title;
        this.content = content;
        this.created_at = create_at;
        this.loveIts = 0;
    }
  }
  