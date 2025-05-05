import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../Models/blog.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BlogDto } from '../Models/DTO/blogDto.model';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://localhost:7064/api/blog';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllBlogs() {
    return this.http.get<Blog[]>(`${this.apiUrl}`);
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/blogwithComments/${id}`);
  }

  createBlog(title: string, description: string) {
    const userId = this.authService.decodeToken()?.["userId"];

    const blogData: BlogDto = {
      title,
      description,
      userId
    };
    console.log("Create blog data: ", blogData);
    return this.http.post(`${this.apiUrl}/createblog`, blogData);
  }
}
