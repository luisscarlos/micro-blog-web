import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { News } from 'src/model/news';
import { NewsService } from 'src/service/news/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})

export class ListNewsComponent implements OnInit {

  newsForm: FormGroup;
  dataSource: News[] = [];
  title: string = '';
  tags: string = '';

  constructor(private api: NewsService, private formBuilder: FormBuilder) {
    this.newsForm = formBuilder.group({});
   }


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
    console.log('inputvalue ', title)
    if (title === null || title === '') {
      this.getNews();
    } else {
      this.api.findNewsByTitle(title).subscribe(data => {
        this.dataSource = data;
        console.log(data);
      });
    }
  }

  findNewsByTags(tags: string) {
    if (tags === null || tags === '') {
      this.getNews();
    } else {
      this.api.findNewsByTags(tags).subscribe(data => {
        this.dataSource = data;
        console.log(data);
      });
    }
  }
}
