import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from 'src/model/comment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8081/api/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(apiUrl);
  }

  createComment(id: string, comment: any): Observable<Comment> {
    const url = `${apiUrl}/${id}`;
    return this.http.post<Comment>(url, comment);
  }

  deleteComment(id: string): Observable<Comment> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Comment>(url, httpOptions);
  }
}
