import { Component, OnInit } from '@angular/core';
import { News } from 'src/model/news';
import { NewsService } from 'src/service/news/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})

export class ListNewsComponent implements OnInit {

  constructor(private api: NewsService) { }
  news = {
    title: "Fila DOWN",
    content: "N Content",
    author: "N Author",
    tags: "N fissura"
   };

   dataSource: News[] = [];

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.api.getNews().subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  findNewsByTitle(title: string) {
    this.api.findNewsByTitle(title).subscribe(data => {
      console.log(data);
    });
  }

  findNewsByTags(tags: string) {
    this.api.findNewsByTags(tags).subscribe(data => {
      console.log(data);
    });
  }

  createNews() {
    this.api.createNews(this.news).subscribe(data => {
      console.log(data);
    });
  }
}
