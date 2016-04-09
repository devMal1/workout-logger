import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {WorkoutLogs} from './../models/workout-logs';
import {WorkoutLog} from './../models/workout-log';
import {WorkoutLoggerService} from '../services/workout-logger.service';

@Component({
    selector: 'saved-logs',
    templateUrl: 'app/saved-logs/saved-logs.html',
    directives: [

    ]
})
export class SavedLogsComponent implements OnInit {
    public title: string = "Saved Logs";
    public savedLogs: WorkoutLogs[];
    public errorMessage: string;

    public constructor(private _workoutLoggerService: WorkoutLoggerService,
        private _router: Router) {}

    public ngOnInit() { this.getLogs(); }

    public getLogs(): void {
        this._workoutLoggerService.getLogs()
            .subscribe(
                workoutLogs => this.savedLogs = workoutLogs,
                error => this.errorMessage = <any> error
            );
    }

    public goToHome(): void {
        let link = ['Home'];
        this._router.navigate(link);
    }
}
