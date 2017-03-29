import { Component } from '@angular/core';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';
import { Service } from '../shared/service';

@Component({
    selector: '[wp-index]',
    providers: [],
    viewProviders: [],
    templateUrl: './index.template.html'
})

export class IndexComponent {
    constructor(private service: Service) {
    }
}
