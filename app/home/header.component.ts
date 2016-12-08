import {Component, Directive, ViewChild} from '@angular/core';
import {ModalModule, ModalDirective, AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {NgForm, FormGroup, AbstractControl, NG_VALIDATORS, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
    selector: 'my-header',
    viewProviders:[],
    providers: [],
    templateUrl: 'app/home/header.component.html'
})

export class HeaderComponent {
   
}