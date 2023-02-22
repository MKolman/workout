export enum Type {
    Barbell,
    Dumbell,
    Kettlebell,
    Bodyweight,
    Time,
}

const iconMapping = new Map<Type, string>([
    [Type.Barbell, 'fitness_center'],
    [Type.Dumbell, 'exercise'],
    [Type.Kettlebell, 'weight'],
    [Type.Bodyweight, 'directions_run'],
    [Type.Time, 'timer'],
]);

export class Exercise {
    id: string;
    name: string;
    type: Type;

    constructor(name: string, type: Type) {
        this.id = name.toLowerCase().replaceAll(" ", "_");
        this.name = name;
        this.type = type;
    }

    icon(): string {
        return iconMapping.get(this.type) || "cancel"
    }
}

export const Store = new Map<string, Exercise>(
    [
        new Exercise("Squat", Type.Barbell),
        new Exercise("Deadlift", Type.Barbell),
        new Exercise("Bench press", Type.Barbell),
        new Exercise("Incline bench", Type.Barbell),
        new Exercise("Barbell row", Type.Barbell),
        new Exercise("Overhead press", Type.Barbell),
        new Exercise("Bicep curls", Type.Dumbell),
        new Exercise("Plank", Type.Time),
        new Exercise("Push-up", Type.Bodyweight),
        new Exercise("Pull-up", Type.Bodyweight),
        new Exercise("Chin-up", Type.Bodyweight),
        new Exercise("Kettlebell swing", Type.Kettlebell),
    ].map(ex => [ex.id, ex])
)