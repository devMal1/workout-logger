import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {WorkoutLog} from '../../../models/workout-log';

@Component({
    selector: 'log-table',
    templateUrl: 'app/home/components/log-table/log-table.component.html',
    directives: [NgForm]
})
export class LogTableComponent {
    public workoutLogs: WorkoutLog[] = [];
    public newWorkoutLog: WorkoutLog = new WorkoutLog("ExerciseName", 0, 0, 0);
    public addingLog: boolean = false;

    public addLog() {
        this.workoutLogs.push(this.newWorkoutLog);
        this.resetNewLog();
    }

    public resetNewLog() {
        this.newWorkoutLog = new WorkoutLog("ExerciseName", 0, 0, 0);
        this.addingLog = false;
    }

}
