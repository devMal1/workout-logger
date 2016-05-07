import {WorkoutLog} from './workout-log';

export class WorkoutLogs {

    constructor(
        public date?: string,
        public workoutSession?: WorkoutLog[]
    ) {}

    public getDate(): string {
        return this.date;
    }

    public setDate(date: string): void {
        this.date = date;
    }

    public getWorkoutSession(): WorkoutLog[] {
        return this.workoutSession;
    }

    public setWorkoutSession(workoutSession: WorkoutLog[]): void {
        this.workoutSession = workoutSession;
    }

}
