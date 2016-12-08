import { Component, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import {HomeService} from './home.service'
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router'
@Component({
    selector: 'my-post',
    templateUrl: 'app/home/post.template.html',
    providers: [HomeService]
})

export class PostComponent {
    post: any = {}
    pageNumber = 0;
    tags: any[] = [];

    constructor(public homeServie: HomeService, public route: ActivatedRoute) {
        homeServie.getTags().then((data) => {
            this.tags = data;
        });
    }
    sub: any;
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.loadPosts(params['id']); 
        });
    }

    loadPosts(id: number) {
        let self = this;
        this.homeServie.getPost(id).then((data) => {
            self.post = data;
        });
    }
}
