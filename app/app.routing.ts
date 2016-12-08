import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './home/posts.component';
import {PostComponent} from './home/post.component';
import {IndexComponent} from './home/index.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
        ,
        children: [
            {
                path: '',
                component: IndexComponent,
            }
            ,
            {
                path: 'posts',
                component: PostsComponent,
            }
            ,
            {
                path: 'post/:id', component: PostComponent
            }

        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);