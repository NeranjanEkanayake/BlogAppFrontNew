import { Component, signal } from '@angular/core';
import { Blog } from '../../Models/blog.model';
import { OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-blogs',
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(
      (result) => {
        this.blogs = result;
        console.log(result);
      }
    );
  }

  onViewDetails(id: number) {
    console.log("Blog ID", id);
  }
}
