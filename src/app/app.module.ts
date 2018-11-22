import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './model/PostService';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './model/AuthService';

const appRoutes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
