import { Component, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import {HomeService} from './home.service'
import {Observable} from 'rxjs/Rx';
declare var $ : any;
@Component({
    selector: 'my-index',
    templateUrl: 'app/home/index.component.html',
    providers: [HomeService]
})

export class IndexComponent { 

}
