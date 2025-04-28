import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CreateBlogComponent } from './Components/create-blog/create-blog.component';
import { ViewSingleBlogComponent } from './Components/view-single-blog/view-single-blog.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
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
        component: ViewSingleBlogComponent
    }
];
