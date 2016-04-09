import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {WorkoutLog} from '../../../models/workout-log';
import {WorkoutLogs} from '../../../models/workout-logs';
import {WorkoutLoggerService} from '../../../services/workout-logger.service';

@Component({
    selector: 'log-table',
    templateUrl: 'app/home/components/log-table/log-table.component.html',
    directives: [NgForm]
})
export class LogTableComponent implements OnInit {
    public workoutLogs: WorkoutLog[] = [];
    public newWorkoutLog: WorkoutLog = new WorkoutLog("ExerciseName", 0, 0, 0);
    public addingLog: boolean = false;
    public errorMessage: string;

    constructor(private _workoutLoggerService: WorkoutLoggerService) {}

    public ngOnInit() { console.log("on init"); }

    public addLog(): void {
        this.workoutLogs.push(this.newWorkoutLog);
        this.resetNewLog();
    }

    public resetNewLog(): void {
        this.newWorkoutLog = new WorkoutLog("ExerciseName", 0, 0, 0);
        this.addingLog = false;
    }

    public saveSession(completedSession: WorkoutLog[]): void {
        if (!completedSession) {return;}

        let completedWorkout: WorkoutLogs = new WorkoutLogs();
        completedWorkout.workoutSession = completedSession;
        this._workoutLoggerService.newSession(completedWorkout)
            .subscribe(
                error => this.errorMessage = <any> error
            );
    }

}
