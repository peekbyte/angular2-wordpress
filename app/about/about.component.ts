import { Component } from '@angular/core';
import { Service } from '../shared/service';

@Component({
    selector: 'wp-about',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/about/about.template.html'
})

export class AboutComponent {
    constructor(private service: Service) {
    }
}