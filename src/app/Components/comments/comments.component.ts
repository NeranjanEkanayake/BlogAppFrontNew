import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommentService } from '../../Services/comment.service';

@Component({
  selector: 'app-comments',
  imports: [ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  form!: FormGroup;

  constructor(private route: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private commentService: CommentService, 
    private router: Router
  ){ }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      comments: ['', Validators.required],
      
    });
  }

  createComment(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));
    const description = this.form.value.comments;

    this.commentService.addComment(description, blogId).subscribe({
      next: () => this.router.navigate(['/']),
      error:(err)=> console.error(err)
    });
  }
}
