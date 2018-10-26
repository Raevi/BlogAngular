import { Input } from '@angular/core';

export class Post  {
    id: number
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  
    constructor(title:string, content:string, create_at:Date, id:number, loveIts:number){
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = create_at;
        this.loveIts = loveIts;
    }
  }
  