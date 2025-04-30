import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../Models/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://localhost:7064/api/blog';

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get<Blog[]>(`${this.apiUrl}`);
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/blogwithComments/${id}`);
  }
}
