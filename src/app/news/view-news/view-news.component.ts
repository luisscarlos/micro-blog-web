import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/model/news';
import { CommentService } from 'src/service/comment/comment.service';
import { NewsService } from 'src/service/news/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {

  news: News = {
    id: '',
    title: '',
    author: '',
    content: '',
    date: new Date,
    tags: '',
    comment: new Array,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: NewsService,
    private commentApi: CommentService) { }

  ngOnInit(): void {
    this.findNewsById(this.route.snapshot.params['id']);
  }

  findNewsById(id: string) {
    this.api.findNewsById(id).subscribe(data => {
      this.news = data;
      console.log(this.news.comment);
    });
  }

  deleteNews(id: string) {
    this.api.deleteNews(id).subscribe(data => {
      this.router.navigate(['/news']);
      console.log(data);
    });
  }

  deleteComment(id: string) {
    console.log(id)
    this.commentApi.deleteComment(id).subscribe(data => {
      window.location.reload();
      console.log(data);
    });
  }

}
