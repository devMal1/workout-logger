import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {WorkoutLog} from './../models/workout-log';
import {WorkoutLogs} from './../models/workout-logs';

@Injectable()
export class WorkoutLoggerService {
    constructor(private _http: Http) {}

    private _loggerUrl = 'http://localhost:3000/api/logs';

    public getLogs(): Observable<WorkoutLogs[]> {

        return this._http.get(this._loggerUrl)
            .map(res => <WorkoutLogs[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);

        // let logs: WorkoutLogs = new WorkoutLogs(null, []);
        // let request = null;
        // //make http get call: http://localhost:3000/api/logs
        // let result = null;
        // //try .map() instead
        // result.body.forEach(function(meta, index) {
        //     logs.setDate(meta.date);
        //     let session = meta.workoutSession;
        //     session.forEach(function(workout, index) {
        //         logs.workoutSession.push(new WorkoutLog(workout.exerciseName, workout.numOfSets,
        //             workout.numOfReps, workout.weight));
        //     });
        // });
        // return logs;
    }

    public getLog(log_id?: string): Observable<WorkoutLogs> {
        return this._http.get(this._loggerUrl)
            .map(res => <WorkoutLogs> res.json())
            .catch(this.handleError);

        // let logs: WorkoutLogs = new WorkoutLogs(null, []);
        // let request = null;
        // request.params({"id" : log_id});
        // //GET http://localhost:3000/api/logs
        // let response = null;
        // let rbs = response.body.workoutSession;
        // logs.setDate(response.body.date);
        // let log: WorkoutLog = new WorkoutLog(rbs.exerciseName, rbs.numOfSets, rbs.numOfReps);
        // logs.workoutSession.push(log);
        // return logs;
    }

    public newSession(logs: WorkoutLogs): Observable<WorkoutLogs[]> {

        let body = JSON.stringify({ logs });
        let headers = new Headers({ 'Content-Type': 'application.json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._loggerUrl, body, options)
            .map(res => <WorkoutLogs[]> res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response): Observable<Response> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
