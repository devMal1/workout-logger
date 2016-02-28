System.register(['angular2/core', '../../../models/workout-log'], function(exports_1, context_1) {
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
    var core_1, workout_log_1;
    var LogTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workout_log_1_1) {
                workout_log_1 = workout_log_1_1;
            }],
        execute: function() {
            LogTableComponent = (function () {
                function LogTableComponent() {
                    this.workoutLogs = [
                        new workout_log_1.WorkoutLog("workout", 3, 5, 60)
                    ];
                }
                LogTableComponent.prototype.newWorkoutLog = function () {
                    this.workoutLogs.push(new workout_log_1.WorkoutLog("exercise name", 0, 0, 0));
                };
                LogTableComponent = __decorate([
                    core_1.Component({
                        selector: 'log-table',
                        templateUrl: 'app/home/components/log-table/log-table.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogTableComponent);
                return LogTableComponent;
            }());
            exports_1("LogTableComponent", LogTableComponent);
        }
    }
});
//# sourceMappingURL=log-table.component.js.map