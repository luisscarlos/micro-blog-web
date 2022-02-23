import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { CreateNewsComponent } from './news/create-news/create-news.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';

const routes: Routes = [
  {
    path:'news',
    component: ListNewsComponent,
    data: { title: 'List news'}
  },
  {
    path:'create-news',
    component: CreateNewsComponent,
    data: { title: 'Create News'}
  },
  {
    path:'create-comment/:id',
    component: CreateCommentComponent,
    data: { title: 'Create Comment'}
  },
  {
    path:'update-news/:id',
    component: UpdateNewsComponent,
    data: { title: 'Update news'}
  },
  {
    path:'view-news/:id',
    component: ViewNewsComponent,
    data: { title: 'View news'}
  },
  {
    path:'',
    redirectTo: '/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
