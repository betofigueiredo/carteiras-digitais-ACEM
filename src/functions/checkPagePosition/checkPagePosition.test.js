import { checkPagePosition } from './checkPagePosition';

describe('checkPagePosition', () => {
	it('should return default = active page 1', () => {
		const result = checkPagePosition();
		expect(result).toBe('active');
	});

	it('should return previous page', () => {
		const result = checkPagePosition({
			actual_page: 2,
			selected_page: 4,
		});
		expect(result).toBe('previous');
	});

	it('should return next page', () => {
		const result = checkPagePosition({
			actual_page: 3,
			selected_page: 2,
		});
		expect(result).toBe('next');
	});

	it('should return active page', () => {
		const result = checkPagePosition({
			actual_page: 3,
			selected_page: 3,
		});
		expect(result).toBe('active');
	});
});
