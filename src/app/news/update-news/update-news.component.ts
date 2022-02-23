import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/service/news/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {

  newsForm: FormGroup;

  id: string = '';

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private api: NewsService,
    private formBuilder: FormBuilder) {
      this.newsForm = formBuilder.group({});
     }

  ngOnInit(): void {
    this.findNewsById(this.route.snapshot.params['id']);
    this.newsForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'content': [null, Validators.required],
      'author': [null, Validators.required],
      'tags': [null, Validators.required],
    });
  }

  findNewsById(id: string) {
    this.api.findNewsById(id).subscribe(data => {
      this.id = data.id;
      this.newsForm.setValue({
        title: data.title,
        content: data.content,
        author: data.author,
        tags: data.tags
      })
      console.log(data);
    });
  }

  updateNews(form: NgForm) {
    this.api.updateNews(this.id, form)
    .subscribe(data => {
      this.router.navigate([`/view-news/${this.id}`]);
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
