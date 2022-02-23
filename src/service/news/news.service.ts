import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from 'src/model/news';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8081/api/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(apiUrl);
  }

  findNewsById(id: string): Observable<News> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<News>(url);
  }

  findNewsByTitle(title: string): Observable<News[]> {
    const url = `${apiUrl}/filter/title/${title}`;

    return this.http.get<News[]>(url);
  }

  findNewsByTags(tags: string): Observable<News[]> {
    const url = `${apiUrl}/filter/tags/${tags}`;

    return this.http.get<News[]>(url);
  }

  deleteNews(id: string): Observable<News> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<News>(url, httpOptions);
  }

  createNews(news: any): Observable<News> {
    return this.http.post<News>(apiUrl, news);
  }

  updateNews(id: string, news: any): Observable<News> {
    const url = `${apiUrl}/${id}`;
    return this.http.put<News>(url, news);
  }
}
