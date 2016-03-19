System.register(['angular2/core', './../models/workout-log', './../models/workout-logs'], function(exports_1, context_1) {
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
    var core_1, workout_log_1, workout_logs_1;
    var WorkoutLoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workout_log_1_1) {
                workout_log_1 = workout_log_1_1;
            },
            function (workout_logs_1_1) {
                workout_logs_1 = workout_logs_1_1;
            }],
        execute: function() {
            WorkoutLoggerService = (function () {
                function WorkoutLoggerService() {
                }
                WorkoutLoggerService.prototype.getAllLogs = function () {
                    var logs = new workout_logs_1.WorkoutLogs(null, []);
                    var request = null;
                    //make http get call: http://localhost:3000/api/logs
                    var result = null;
                    //try .map() instead
                    result.body.forEach(function (meta, index) {
                        logs.setDate(meta.date);
                        var session = meta.workoutSession;
                        session.forEach(function (workout, index) {
                            logs.workoutSession.push(new workout_log_1.WorkoutLog(workout.exerciseName, workout.numOfSets, workout.numOfReps, workout.weight));
                        });
                    });
                    return logs;
                };
                WorkoutLoggerService.prototype.getLog = function (log_id) {
                    var logs = new workout_logs_1.WorkoutLogs(null, []);
                    var request = null;
                    request.params({ "id": log_id });
                    //GET http://localhost:3000/api/logs
                    var response = null;
                    var rbs = response.body.workoutSession;
                    logs.setDate(response.body.date);
                    var log = new workout_log_1.WorkoutLog(rbs.exerciseName, rbs.numOfSets, rbs.numOfReps);
                    logs.workoutSession.push(log);
                    return logs;
                };
                WorkoutLoggerService.prototype.newSession = function (logs) {
                    var request = logs.getWorkoutSession();
                    //POST http://localhost:3000/api/logs
                    var response = null;
                };
                WorkoutLoggerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WorkoutLoggerService);
                return WorkoutLoggerService;
            }());
            exports_1("WorkoutLoggerService", WorkoutLoggerService);
        }
    }
});
//# sourceMappingURL=workout-logger.service.js.map