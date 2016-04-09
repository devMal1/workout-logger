import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {LogTableComponent} from './components/log-table/log-table.component';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    directives: [
        LogTableComponent,
    ],
})
export class HomeComponent {
    public title: string = "Workout Logger";
    public todays_date: Date = new Date();

    constructor(private _router: Router) {}

    goToSavedLogs() {
        let link = ['SavedLogs'];
        this._router.navigate(link);
    }
}
