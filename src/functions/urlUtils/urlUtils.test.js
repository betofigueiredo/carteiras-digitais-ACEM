import { urlUtils } from './urlUtils';

describe('getPageFromUrl', () => {
	it('should return default value 1', () => {
		const result = urlUtils.getPageFromUrl();
		expect(result).toBe(1);
	});

	it('should return page 1', () => {
		const result = urlUtils.getPageFromUrl({
			params: { page: 'associations' },
		});
		expect(result).toBe(1);
	});

	it('should return page 1', () => {
		const result = urlUtils.getPageFromUrl({
			params: { page: 'agdsfgsdf' },
		});
		expect(result).toBe(1);
	});

	it('should return page 2', () => {
		const result = urlUtils.getPageFromUrl({
			params: { page: 'members' },
		});
		expect(result).toBe(2);
	});

	it('should return page 3', () => {
		const result = urlUtils.getPageFromUrl({
			params: { page: 'profile' },
		});
		expect(result).toBe(3);
	});
});

describe('getUrlFromPage', () => {
	it('should return default value associations', () => {
		const result = urlUtils.getUrlFromPage();
		expect(result).toBe('associations');
	});

	it('should return page associations', () => {
		const result = urlUtils.getUrlFromPage(1);
		expect(result).toBe('associations');
	});

	it('should return page associations', () => {
		const result = urlUtils.getUrlFromPage(64);
		expect(result).toBe('associations');
	});

	it('should return page members', () => {
		const result = urlUtils.getUrlFromPage(2);
		expect(result).toBe('members');
	});

	it('should return page profile', () => {
		const result = urlUtils.getUrlFromPage(3);
		expect(result).toBe('profile');
	});
});
