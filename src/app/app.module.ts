import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './service/PostService';
import { AuthComponent } from './auth/auth.component';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/AuthService';
import { PostItemComponent } from './post-item/post-item.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './service/AuthGuard.Service';

const appRoutes: Routes = [
  { path: 'blog', canActivate: [AuthGuard], component: PostListComponent },
  { path: 'blog/:id',  canActivate: [AuthGuard], component: PostItemComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'} //l'order des route est important
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    PostItemComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
