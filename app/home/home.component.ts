import { Component } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HeaderComponent }  from './header.component';
import { FooterComponent }  from './footer.component';
import { IndexComponent }  from './index.component';
import {HomeService} from './home.service'

@Component({
    selector: 'my-home',
    providers: [HomeService],
    viewProviders: [],
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent {
    constructor(private homeService: HomeService) {
            

    }
}
