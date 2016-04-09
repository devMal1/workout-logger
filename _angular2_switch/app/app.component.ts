import {Component} from 'angular2/core';
import {HomeComponent} from './home/home';
import {WorkoutLoggerService} from './services/workout-logger.service';

@Component({
    selector: 'my-app',
    template: `
        <home></home>

    `,
    directives: [
        HomeComponent,
    ],
    providers: [
        WorkoutLoggerService
    ]
})
export class AppComponent {}
