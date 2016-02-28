export class WorkoutLog {
    constructor(
        private exerciseName: string,
        private numOfSets: number,
        private numOfReps: number,
        private weight: number
    ) {}

    public getExerciseName(): string {
        return this.exerciseName;
    }

    public setExerciseName(exerciseName: string) {
        this.exerciseName = exerciseName;
    }

    public getNumOfSets(): number {
        return this.numOfSets;
    }

    public setNumOfSets(numOfSets: number) {
        this.numOfSets = numOfSets;
    }

    public getNumOfReps(): number {
        return this.numOfReps;
    }

    public setNumOfReps(numOfReps: number) {
        this.numOfReps = numOfReps;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number) {
        this.weight = weight;
    }
}
