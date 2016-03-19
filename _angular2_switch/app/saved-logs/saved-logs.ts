import {Component} from 'angular2/core';
import {WorkoutLogs} from './../models/workout-logs';
import {WorkoutLog} from './../models/workout-log';

@Component({
    selector: 'saved-logs',
    templateUrl: 'app/saved-logs/saved-logs.html',
    directives: [

    ]
})
export class SavedLogs {
    public title: string = "Saved Logs";
}
