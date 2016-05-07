System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var WorkoutLoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WorkoutLoggerService = (function () {
                function WorkoutLoggerService(_http) {
                    this._http = _http;
                    this._loggerUrl = 'http://localhost:3000/api/logs';
                }
                WorkoutLoggerService.prototype.getLogs = function () {
                    return this._http.get(this._loggerUrl)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
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
                };
                WorkoutLoggerService.prototype.getLog = function (log_id) {
                    return this._http.get(this._loggerUrl)
                        .map(function (res) { return res.json(); })
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
                };
                WorkoutLoggerService.prototype.newSession = function (logs) {
                    var body = JSON.stringify({ logs: logs });
                    var headers = new http_1.Headers({ 'Content-Type': 'application.json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._loggerUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                WorkoutLoggerService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                WorkoutLoggerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WorkoutLoggerService);
                return WorkoutLoggerService;
            }());
            exports_1("WorkoutLoggerService", WorkoutLoggerService);
        }
    }
});
//# sourceMappingURL=workout-logger.service.js.map