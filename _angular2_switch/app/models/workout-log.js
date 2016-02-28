System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WorkoutLog;
    return {
        setters:[],
        execute: function() {
            WorkoutLog = (function () {
                function WorkoutLog(exerciseName, numOfSets, numOfReps, weight) {
                    this.exerciseName = exerciseName;
                    this.numOfSets = numOfSets;
                    this.numOfReps = numOfReps;
                    this.weight = weight;
                }
                WorkoutLog.prototype.getExerciseName = function () {
                    return this.exerciseName;
                };
                WorkoutLog.prototype.setExerciseName = function (exerciseName) {
                    this.exerciseName = exerciseName;
                };
                WorkoutLog.prototype.getNumOfSets = function () {
                    return this.numOfSets;
                };
                WorkoutLog.prototype.setNumOfSets = function (numOfSets) {
                    this.numOfSets = numOfSets;
                };
                WorkoutLog.prototype.getNumOfReps = function () {
                    return this.numOfReps;
                };
                WorkoutLog.prototype.setNumOfReps = function (numOfReps) {
                    this.numOfReps = numOfReps;
                };
                WorkoutLog.prototype.getWeight = function () {
                    return this.weight;
                };
                WorkoutLog.prototype.setWeight = function (weight) {
                    this.weight = weight;
                };
                return WorkoutLog;
            }());
            exports_1("WorkoutLog", WorkoutLog);
        }
    }
});
//# sourceMappingURL=workout-log.js.map