import { Store as WStore, Workout } from "./workout";

export class Program {
    id: string
    name: string
    workouts: Workout[]
    constructor(name: string, workouts: Workout[]) {
        this.id = name.toLowerCase().replaceAll(' ', '_')
        this.name = name
        this.workouts = workouts
    }
}

export const Store = new Map<string, Program>([
    new Program("Stronglifts 5x5", [WStore.get("5x5_a") as Workout, WStore.get("5x5_b") as Workout]),
    new Program("Madcow 5x5", [WStore.get("madcow_a") as Workout, WStore.get("madcow_b") as Workout, WStore.get("madcow_c") as Workout])
].map(pr => [pr.id, pr]))