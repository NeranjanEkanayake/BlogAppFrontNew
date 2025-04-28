import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BlogsComponent } from "../blogs/blogs.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, BlogsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
