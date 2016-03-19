import {Injectable} from 'angular2/core';
import {WorkoutLog} from './../models/workout-log';
import {WorkoutLogs} from './../models/workout-logs';

@Injectable()
export class WorkoutLoggerService {

    public getAllLogs(): WorkoutLogs {
        let logs: WorkoutLogs = new WorkoutLogs(null, []);
        let request = null;
        //make http get call: http://localhost:3000/api/logs
        let result = null;
        //try .map() instead
        result.body.forEach(function(meta, index) {
            logs.setDate(meta.date);
            let session = meta.workoutSession;
            session.forEach(function(workout, index) {
                logs.workoutSession.push(new WorkoutLog(workout.exerciseName, workout.numOfSets,
                    workout.numOfReps, workout.weight));
            });
        });
        return logs;
    }

    public getLog(log_id: string): WorkoutLogs {
        let logs: WorkoutLogs = new WorkoutLogs(null, []);
        let request = null;
        request.params({"id" : log_id});
        //GET http://localhost:3000/api/logs
        let response = null;
        let rbs = response.body.workoutSession;
        logs.setDate(response.body.date);
        let log: WorkoutLog = new WorkoutLog(rbs.exerciseName, rbs.numOfSets, rbs.numOfReps);
        logs.workoutSession.push(log);
        return logs;
    }

    public newSession(logs: WorkoutLogs): void {
        let request = logs.getWorkoutSession();
        //POST http://localhost:3000/api/logs
        let response = null;
        
    }
}
