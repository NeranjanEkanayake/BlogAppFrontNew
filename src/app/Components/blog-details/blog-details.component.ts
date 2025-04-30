import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-blog-details',
  imports: [DatePipe],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  blogData: Blog | null = null;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));

    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe({
        next: (bData) => this.blogData = bData
      });
      console.log(this.blogData);
    }
  }

}
