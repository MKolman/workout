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
	static async get(name: string): Promise<Setting | undefined> {
		return await Setting.db?.get(name);
	}
}

export class ActiveProgram extends Setting {
	programId: string;
	static key = 'active_program';
	constructor(programId: string) {
		super(ActiveProgram.key);
		this.programId = programId;
	}
	static async get(): Promise<ActiveProgram | undefined> {
		let active = await Setting.db?.get(ActiveProgram.key);
		console.log(Setting.db, active);
		return active as ActiveProgram | undefined;
	}
}

export class DarkMode extends Setting {
	enabled?: boolean;
	static key = 'dark_mode';
	constructor(enabled?: boolean) {
		super(DarkMode.key);
		this.enabled = enabled;
	}

	static async get(): Promise<DarkMode | undefined> {
		const obj = await Setting.db?.get(DarkMode.key);
		if (!obj) return undefined;
		Object.setPrototypeOf(obj, DarkMode.prototype);
		return obj as DarkMode;
	}

	static async isDarkMode(): Promise<boolean | undefined> {
		const darkMode = await DarkMode.get();
		return darkMode?.enabled;
	}

	async toggle(): Promise<void> {
		switch (this.enabled) {
			case undefined:
				this.enabled = true;
				break;
			case true:
				this.enabled = false;
				break;
			case false:
				this.enabled = undefined;
				break;
		}
		await this.save();
	}
}

export function populateSettings(db?: Table<Setting>): void {
	Setting.db = db || Setting.db;
	if (!Setting.db) {
		console.error('Settings database not initialized');
		return;
	}
	new ActiveProgram('stronglifts_5x5').save();
	new DarkMode().save();
}
