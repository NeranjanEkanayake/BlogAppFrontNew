import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentDto } from '../Models/DTO/comment-dto.model';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://localhost:7064/api/comment';

  constructor( private http: HttpClient) { }

  addComment(content: string, blogId: Number): Observable<any> {    
    const comment: CommentDto = {
      content,
      blogId
    };

    console.log("Comment data: ", comment);
    return this.http.post(`${this.apiUrl}/addComment`, comment);
  }
}
