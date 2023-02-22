// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface Array<T> {
		findLast(predicate: (value: T, index: number, obj: T[]) => boolean): T;
	}
}

export {};
