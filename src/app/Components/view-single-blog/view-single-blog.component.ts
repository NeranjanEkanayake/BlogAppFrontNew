import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BlogDetailsComponent } from "../blog-details/blog-details.component";
import { CommentsComponent } from "../comments/comments.component";

@Component({
  selector: 'app-view-single-blog',
  imports: [NavbarComponent, BlogDetailsComponent, CommentsComponent],
  templateUrl: './view-single-blog.component.html',
  styleUrl: './view-single-blog.component.css'
})
export class ViewSingleBlogComponent {

}
