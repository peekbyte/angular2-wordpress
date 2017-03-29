import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './post/posts.component';
import { PostComponent } from './post/post.component';
import { IndexComponent } from './shared/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
            }
            ,
            {
                path: 'posts',
                component: PostsComponent,
            },
            {
                path: 'post/:id', component: PostComponent
            },
            {
                path: 'about', 
                component: AboutComponent
            },
            {
                path: 'contact', 
                component: ContactComponent
            }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);