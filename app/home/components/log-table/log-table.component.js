System.register(['angular2/core', 'angular2/common', '../../../models/workout-log', '../../../models/workout-logs', '../../../services/workout-logger.service'], function(exports_1, context_1) {
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
    var core_1, common_1, workout_log_1, workout_logs_1, workout_logger_service_1;
    var LogTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (workout_log_1_1) {
                workout_log_1 = workout_log_1_1;
            },
            function (workout_logs_1_1) {
                workout_logs_1 = workout_logs_1_1;
            },
            function (workout_logger_service_1_1) {
                workout_logger_service_1 = workout_logger_service_1_1;
            }],
        execute: function() {
            LogTableComponent = (function () {
                function LogTableComponent(_workoutLoggerService) {
                    this._workoutLoggerService = _workoutLoggerService;
                    this.workoutLogs = [];
                    this.newWorkoutLog = new workout_log_1.WorkoutLog("ExerciseName", 0, 0, 0);
                    this.addingLog = false;
                }
                LogTableComponent.prototype.ngOnInit = function () { console.log("on init"); };
                LogTableComponent.prototype.addLog = function () {
                    this.workoutLogs.push(this.newWorkoutLog);
                    this.resetNewLog();
                };
                LogTableComponent.prototype.resetNewLog = function () {
                    this.newWorkoutLog = new workout_log_1.WorkoutLog("ExerciseName", 0, 0, 0);
                    this.addingLog = false;
                };
                LogTableComponent.prototype.saveSession = function (completedSession) {
                    var _this = this;
                    if (!completedSession) {
                        return;
                    }
                    var completedWorkout = new workout_logs_1.WorkoutLogs();
                    completedWorkout.workoutSession = completedSession;
                    this._workoutLoggerService.newSession(completedWorkout)
                        .subscribe(function (error) { return _this.errorMessage = error; });
                };
                LogTableComponent = __decorate([
                    core_1.Component({
                        selector: 'log-table',
                        templateUrl: 'app/home/components/log-table/log-table.component.html',
                        directives: [common_1.NgForm]
                    }), 
                    __metadata('design:paramtypes', [workout_logger_service_1.WorkoutLoggerService])
                ], LogTableComponent);
                return LogTableComponent;
            }());
            exports_1("LogTableComponent", LogTableComponent);
        }
    }
});
//# sourceMappingURL=log-table.component.js.map