import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/service/news/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: NewsService,
    private formBuilder: FormBuilder) {
      this.newsForm = formBuilder.group({});
     }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'content': [null, Validators.required],
      'author': [null, Validators.required],
      'tags': [null, Validators.required],
    });
  }

  createNews(form: FormGroup) {
    this.api.createNews(form).subscribe(data => {
      this.router.navigate(['/news']);
      console.log(data);
    });
  }

}
