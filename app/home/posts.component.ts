import { Component, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import {HomeService} from './home.service'
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-posts',
    templateUrl: 'app/home/posts.template.html',
    providers: [HomeService]
})

export class PostsComponent {
    posts: any[] = [];
    tags: any[] = [];
    pageNumber = 0;
    constructor(public homeServie: HomeService) {
        homeServie.getTags().then((data) => {
            this.tags = data;
        });
        this.loadPosts();
    }

    loadPosts() {
        this.pageNumber++;
        let self = this;
        this.homeServie.getPosts(this.pageNumber, 3).then((data: any[]) => {
            if(data.length == 0)
             return;

            if (self.posts.length == 0)
                self.posts = data;
            else
                data.forEach(element => {
                    self.posts.push(element);
                });

        });
    }
}
