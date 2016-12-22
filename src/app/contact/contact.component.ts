import { Component } from '@angular/core';
import { Service } from '../shared/service';

@Component({
    selector: 'wp-contact',
    providers: [],
    viewProviders: [],
    templateUrl: './contact.template.html'
})

export class ContactComponent {
    constructor(private service: Service) {
    }
}