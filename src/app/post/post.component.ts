import { Component, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import {Service} from '../shared/service'
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router'
@Component({
    selector: 'wp-post',
    templateUrl: './post.template.html',
    providers: []
})

export class PostComponent {
    post: any = {}
    pageNumber = 0;
    tags: any[] = [];

    constructor(public service: Service, public route: ActivatedRoute) {
        service.getTags().then((data) => {
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
        this.service.getPost(id).then((data) => {
            self.post = data;
        });
    }
}
