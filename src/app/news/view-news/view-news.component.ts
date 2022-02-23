import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/model/news';
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
    // comment: Array<Comment>,
  }

  constructor(private router: Router, private route: ActivatedRoute, private api: NewsService) { }

  ngOnInit(): void {
    this.findNewsById(this.route.snapshot.params['id']);
  }

  findNewsById(id: string) {
    this.api.findNewsById(id).subscribe(data => {
      this.news = data;
      console.log(data);
    });
  }

  deleteNews(id: string) {
    this.api.deleteNews(id).subscribe(data => {
      this.router.navigate(['/news']);
      console.log(data);
    });
  }

}
