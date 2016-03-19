import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LogTableComponent} from './components/log-table/log-table.component';
import {WorkoutLoggerService} from './../services/workout-logger.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    directives: [
        LogTableComponent,
        ROUTER_DIRECTIVES
    ],
    providers: [
        WorkoutLoggerService
    ],
})
export class HomeComponent {
    public title: string = "Workout Logger";
    public todays_date: Date = new Date();

}
