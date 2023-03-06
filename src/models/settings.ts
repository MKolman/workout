import type { Table } from 'dexie';

export class Setting {
	id: string;
	static db?: Table<Setting>;
	constructor(name: string) {
		this.id = name;
	}
	async save(): Promise<void> {
		await Setting.db?.put(this);
	}
	static async get<T>(name: string): Promise<Setting | undefined> {
		return await Setting.db?.get(name);
	}
}

export class ActiveProgram extends Setting {
	programId: string;
	constructor(programId: string) {
		super('active_program');
		this.programId = programId;
	}
	static async get(): Promise<ActiveProgram | undefined> {
		let active = await Setting.db?.get('active_program');
		console.log(Setting.db, active);
		return active as ActiveProgram | undefined;
	}
}

export function populateSettings(db?: Table<Setting>): void {
	Setting.db = db || Setting.db;
	if (!Setting.db) {
		console.error('Settings database not initialized');
		return;
	}
	const prog = new ActiveProgram('stronglifts_5x5');
	prog.save();
}
