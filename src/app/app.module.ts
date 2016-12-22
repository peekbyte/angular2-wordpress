import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing'
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { HeaderComponent}  from './shared/header.component';
import { FooterComponent }  from './shared/footer.component';
import { IndexComponent }  from './shared/index.component';
import { PostsComponent }  from './post/posts.component';
import { PostComponent }  from './post/post.component';
import { AboutComponent }  from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
import { FilterPostTags } from './post/filter-post-tags.pipe';
import { Service } from './shared/service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, routing, FormsModule, HttpModule],
  providers: [Service],
  declarations: [AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PostsComponent,
    PostComponent,
    AboutComponent,
    ContactComponent,
    FilterPostTags
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

