import {Component} from 'angular2/core';
import {WorkoutLog} from '../../../models/workout-log';

@Component({
    selector: 'log-table',
    templateUrl: 'app/home/components/log-table/log-table.component.html'
})
export class LogTableComponent {
    public workoutLogs: WorkoutLog[] = [
        new WorkoutLog("workout", 3, 5, 60)
    ];

    public newWorkoutLog() {
        this.workoutLogs.push(new WorkoutLog("exercise name", 0, 0, 0));
    }
}
