// This works better than enums for some reason
export const Type = {
	Barbell: 'Barbell',
	Dumbell: 'Dumbell',
	Kettlebell: 'Kettlebell',
	Bodyweight: 'Bodyweight',
	Time: 'Time',
} as const;
export type Type = string;

export class TypeUtil {
	static icon(type: Type): string {
		switch (type) {
			case Type.Barbell:
				return 'fitness_center';
			case Type.Dumbell:
				return 'exercise';
			case Type.Kettlebell:
				return 'weight';
			case Type.Bodyweight:
				return 'directions_run';
			case Type.Time:
				return 'timer';
			default:
				throw `icon not defined for Type ${type}`;
		}
	}
	static toString(type: Type): string {
		return type.toString();
	}
}

export class Exercise {
	id: string;
	name: string;
	type: Type;

	constructor(name: string, type: Type) {
		this.id = name.toLowerCase().replaceAll(' ', '_');
		this.name = name;
		this.type = type;
	}

	icon(): string {
		return TypeUtil.icon(this.type);
	}
}

export const Store = new Map<string, Exercise>(
	[
		new Exercise('Squat', Type.Barbell),
		new Exercise('Deadlift', Type.Barbell),
		new Exercise('Bench press', Type.Barbell),
		new Exercise('Incline bench', Type.Barbell),
		new Exercise('Barbell row', Type.Barbell),
		new Exercise('Overhead press', Type.Barbell),
		new Exercise('Bicep curls', Type.Dumbell),
		new Exercise('Plank', Type.Time),
		new Exercise('Push-up', Type.Bodyweight),
		new Exercise('Pull-up', Type.Bodyweight),
		new Exercise('Chin-up', Type.Bodyweight),
		new Exercise('Kettlebell swing', Type.Kettlebell),
	].map((ex) => [ex.id, ex]),
);
