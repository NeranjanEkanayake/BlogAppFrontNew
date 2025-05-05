import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../Services/blog.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})

export class CreateBlogComponent implements OnInit {
  form!: FormGroup;

  constructor(private blogService: BlogService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createBlog(): void {
    const { title, description } = this.form.value;
    this.blogService.createBlog(title, description).subscribe({
      next: () => this.route.navigate(['/'])
    });
  }
}
