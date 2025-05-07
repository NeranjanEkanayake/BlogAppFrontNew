import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommentsComponent } from "../comments/comments.component";
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  imports: [DatePipe, NavbarComponent, CommentsComponent, RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  blogData: Blog | null = null;
  isLoggedIn = false;
  role: string | null = null;
  deleteComplete = false;
  blogId!: number;
  constructor(private route: ActivatedRoute,
    private blogService: BlogService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));

    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe({
        next: (bData) => this.blogData = bData
      });
    }
    this.isLoggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getUserRole();
  }

  isAdmin(): boolean {
    return this.role === 'Admin';
  }

  deleteBlog(): void {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Blog Id inside the Delete: ", this.blogId);
    this.blogService.deleteBlog(this.blogId).subscribe(
      () => {
        this.router.navigate(['/']);
      });
  }
}
