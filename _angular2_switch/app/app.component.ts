import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from './home/home';
import {SavedLogsComponent} from './saved-logs/saved-logs';
import {WorkoutLoggerService} from './services/workout-logger.service';

@Component({
    selector: 'my-app',
    template: `
        <nav></nav>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES,
    ],
    providers: [
        ROUTER_PROVIDERS,
        WorkoutLoggerService
    ]
})
@RouteConfig([
    {
        path: '/logger',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/prevSessions',
        name: 'SavedLogs',
        component: SavedLogsComponent
    }
])
export class AppComponent {}
