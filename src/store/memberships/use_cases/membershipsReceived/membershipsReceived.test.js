import membershipsReceived from './membershipsReceived';
import memberships from '../../store';

describe('membershipsReceived', () => {
	const state = { ...memberships };
	const list = [{
		'Número': '100',
		Associado: 'Beto Figueiredo',
		'Ativo ou Não': 'Sim',
	}, {
		'Número': '101',
		Associado: 'Heitor',
		'Ativo ou Não': 'Não',
	}];
	const action = { payload: list };
	const result = membershipsReceived(state, action);

	it('should not break with undefined values', () => {
		const result = membershipsReceived();
		const expected = { fetching: 'LOADED', all_ids: [], by_id: {} };
		expect(result).toStrictEqual(expected);
	});

	it('should show the fetching is loaded', () => {
		expect(result.fetching).toStrictEqual('LOADED');
	});

	it('should lowerCase and normalize all object keys', () => {
		const expected = {
			'100': {
				numero: '100',
				associado: 'Beto Figueiredo',
				ativo_ou_nao: 'Sim',
			},
			'101': {
				numero: '101',
				associado: 'Heitor',
				ativo_ou_nao: 'Não',
			},
		};
		expect(result.by_id).toStrictEqual(expected);
	});
});
