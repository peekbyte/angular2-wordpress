import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: '[wp-app]',
    template: `
    <router-outlet></router-outlet>`
})
export class AppComponent {
    private viewContainerRef: ViewContainerRef;
    public constructor(viewContainerRef: ViewContainerRef, private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) {
        this.viewContainerRef = viewContainerRef;
    }
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    pageTitle = '';
    ngOnInit() {
        let Me = this;
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe((event) => { this.pageTitle = event['title'], this.titleService.setTitle(event['title']) });
    }


}
