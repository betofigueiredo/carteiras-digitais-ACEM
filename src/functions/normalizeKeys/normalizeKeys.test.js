import { normalizeKeys } from './normalizeKeys';

describe('normalizeKeys', () => {
	it('should return default value {}', () => {
		const result = normalizeKeys();
		expect(result).toStrictEqual({});
	});

	it('should lowerCase all keys', () => {
		const result = normalizeKeys({
			Param1: 1,
			PaRam2: 2,
		});
		expect(result).toStrictEqual({
			param1: 1,
			param2: 2,
		});
	});

	it('should normalize all keys', () => {
		const result = normalizeKeys({
			Número: 1,
			PâdrÃo: 2,
			Áéíóú: 3,
		});
		expect(result).toStrictEqual({
			numero: 1,
			padrao: 2,
			aeiou: 3,
		});
	});

	it('should replace spaces with underscore in all keys', () => {
		const result = normalizeKeys({
			'Núm ero': 1,
			'Pâd rÃ o': 2,
			'Áé íóú': 3,
		});
		expect(result).toStrictEqual({
			num_ero: 1,
			pad_ra_o: 2,
			ae_iou: 3,
		});
	});
});
