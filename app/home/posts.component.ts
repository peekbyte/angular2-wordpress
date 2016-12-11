import { Component, AfterViewInit, AfterViewChecked, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
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
    constructor(public homeServie: HomeService, private elRef: ElementRef, private cdRef: ChangeDetectorRef) {
        homeServie.getTags().then((data) => {
            this.tags = data;
        });
        this.loadPosts();
    }
    isViewInitialized = false;
    ngAfterViewInit() {
        this.isViewInitialized = true;
        if (this.posts.length > 0) {
            this.updateHrefs();
        }
    }

    updateHrefs() {
        this.elRef.nativeElement.querySelectorAll('p > a.more-link').forEach((e: any) => {
            debugger;
            e.href = '';
            //[routerLink]="['/home/post', post.id]"
            e.routerLink = '/home/post/10';
            // e.text = '';
            // e.remove();
          });

    }

    loadPosts() {
        this.pageNumber++;
        let self = this;
        this.homeServie.getPosts(this.pageNumber, 3).then((data: any[]) => {
            if (data.length == 0)
                return;

            if (self.posts.length == 0)
                self.posts = data;
            else
                data.forEach(element => {
                    self.posts.push(element);
                });

            this.cdRef.detectChanges(); 
            if (this.isViewInitialized) {
                this.updateHrefs();
            }
        });
    }
}
