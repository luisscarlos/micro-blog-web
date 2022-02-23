import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { CreateNewsComponent } from './news/create-news/create-news.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms';

import { NewsService } from 'src/service/news/news.service';
import { CommentService } from 'src/service/comment/comment.service';
import { ViewNewsComponent } from './news/view-news/view-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListNewsComponent,
    CreateNewsComponent,
    UpdateNewsComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [NewsService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
