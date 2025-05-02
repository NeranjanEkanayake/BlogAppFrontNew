import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-blog-details',
  imports: [DatePipe,NavbarComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  blogData: Blog | null = null;
  showButton: boolean = true;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private authService: AuthService) { }

  ngOnInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));

    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe({
        next: (bData) => this.blogData = bData
      });
      console.log(this.blogData);
    }
  }

  checkLoggedIn(): boolean {
    return this.showButton = this.authService.isLoggedIn();
  }
}
