System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WorkoutLogs;
    return {
        setters:[],
        execute: function() {
            WorkoutLogs = (function () {
                function WorkoutLogs(date, workoutSession) {
                    this.date = date;
                    this.workoutSession = workoutSession;
                }
                WorkoutLogs.prototype.getDate = function () {
                    return this.date;
                };
                WorkoutLogs.prototype.setDate = function (date) {
                    this.date = date;
                };
                WorkoutLogs.prototype.getWorkoutSession = function () {
                    return this.workoutSession;
                };
                WorkoutLogs.prototype.setWorkoutSession = function (workoutSession) {
                    this.workoutSession = workoutSession;
                };
                return WorkoutLogs;
            }());
            exports_1("WorkoutLogs", WorkoutLogs);
        }
    }
});
//# sourceMappingURL=workout-logs.js.map