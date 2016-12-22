import { Component } from '@angular/core';
import { Service } from '../shared/service';

@Component({
    selector: '[wp-home]',
    providers: [],
    viewProviders: [],
    templateUrl: './home.template.html'
})

export class HomeComponent {
    constructor(private service: Service) {
    }
}