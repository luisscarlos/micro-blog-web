import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/service/comment/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  commentForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: CommentService,
    private formBuilder: FormBuilder) {
      this.commentForm = formBuilder.group({});
     }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      'content': [null, Validators.required],
      'author': [null, Validators.required],
    });
  }

  createComment(form: FormGroup) {
    const newsId = this.route.snapshot.params['id'];
    this.api.createComment(newsId, form).subscribe(data => {
      this.router.navigate([`/view-news/${newsId}`]);
      console.log(data);
    });
  }

}
