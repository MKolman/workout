import { describe, expect, it } from 'vitest';
import { Type, TypeUtil } from './exercise';

describe('Test exercise typeutil coverage', () => {
	it('has the same keys and values', () => {
		for (const key in Type) {
			const value = Type[key as keyof typeof Type];
			expect(key).toEqual(value);
		}
	});
	it('has the same toString', () => {
		for (const key in Type) {
			const value = key.toString();
			expect(key).toEqual(value);
		}
	});
	it('has all icons', () => {
		expect(() => TypeUtil.icon('asdfasf')).toThrow();
		for (const type in Type) {
			expect(() => TypeUtil.icon(type)).not.toThrow();
		}
	});
	it('has a formatter', () => {
		expect(() => TypeUtil.formatDifficulty('asdfasf', 1)).toThrow();
		for (const type in Type) {
			expect(() => TypeUtil.formatDifficulty(type, 1)).not.toThrow();
		}
	});
});
