import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import {routing} from './app.routing'
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { HeaderComponent}  from './home/header.component';
import { FooterComponent }  from './home/footer.component';
import { IndexComponent }  from './home/index.component';
import { PostsComponent }  from './home/posts.component';
import { PostComponent }  from './home/post.component';
import {FilterPostTags} from './home/filter-post-tags.pipe';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, routing, FormsModule, HttpModule, Ng2BootstrapModule],
  providers: [],
  declarations: [AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PostsComponent,
    PostComponent,
    FilterPostTags
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

