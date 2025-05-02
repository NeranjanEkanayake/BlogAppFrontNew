import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CreateBlogComponent } from './Components/create-blog/create-blog.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'create-blog',
        component: CreateBlogComponent
    },
    {
        path: 'view-blog/:id',
        component: BlogDetailsComponent
    }
];
