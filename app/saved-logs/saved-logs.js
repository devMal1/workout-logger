System.register(['angular2/core', 'angular2/router', '../services/workout-logger.service'], function(exports_1, context_1) {
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
    var core_1, router_1, workout_logger_service_1;
    var SavedLogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (workout_logger_service_1_1) {
                workout_logger_service_1 = workout_logger_service_1_1;
            }],
        execute: function() {
            SavedLogsComponent = (function () {
                function SavedLogsComponent(_workoutLoggerService, _router) {
                    this._workoutLoggerService = _workoutLoggerService;
                    this._router = _router;
                    this.title = "Saved Logs";
                }
                SavedLogsComponent.prototype.ngOnInit = function () { this.getLogs(); };
                SavedLogsComponent.prototype.getLogs = function () {
                    var _this = this;
                    this._workoutLoggerService.getLogs()
                        .subscribe(function (workoutLogs) { return _this.savedLogs = workoutLogs; }, function (error) { return _this.errorMessage = error; });
                };
                SavedLogsComponent.prototype.goToHome = function () {
                    var link = ['Home'];
                    this._router.navigate(link);
                };
                SavedLogsComponent = __decorate([
                    core_1.Component({
                        selector: 'saved-logs',
                        templateUrl: 'app/saved-logs/saved-logs.html',
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [workout_logger_service_1.WorkoutLoggerService, router_1.Router])
                ], SavedLogsComponent);
                return SavedLogsComponent;
            }());
            exports_1("SavedLogsComponent", SavedLogsComponent);
        }
    }
});
//# sourceMappingURL=saved-logs.js.map