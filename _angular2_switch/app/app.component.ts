import {Component} from 'angular2/core';
import {HomeComponent} from './home/home';

@Component({
    selector: 'my-app',
    template: `
        <home></home>

    `,
    directives: [
        HomeComponent,
    ]
})
export class AppComponent {}
