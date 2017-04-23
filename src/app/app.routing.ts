import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './post/posts.component';
import { PostComponent } from './post/post.component';
import { IndexComponent } from './shared/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

let title = 'Peek Byte';

const appRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: IndexComponent

        ,
        children: [
            {
                path: '',
                component: HomeComponent,
                data: { title: title }
            },
            {
                path: 'posts',
                component: PostsComponent,
                data: { title: 'Posts - ' + title }
            },
            {
                path: 'post/:id',
                component: PostComponent,
                data: { title: 'Posts - ' + title }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: { title: 'About - ' + title }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: { title: 'Contact - ' + title }
            }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);