import { v5 as uuidv5 } from 'uuid';
import associationsReceived from '../associationsReceived';
import associations from '../../../store';

function createUniqueId(planilha_url) {
	const MY_NAMESPACE = process.env.REACT_APP_NAMESPACE;
	return uuidv5(planilha_url, MY_NAMESPACE);
}

describe('associationsReceived', () => {
	const state = { ...associations };
	const list = [{
		Associação: 'ACEM',
		Planilha: 'https://docs.google.com/1',
		'Ativa ou Não': 'Sim',
	}, {
		Associação: 'ABEE - Associação Brasileira de Escalada Esportiva',
		Planilha: 'https://docs.google.com/2',
		'Ativa ou Não': 'Não',
	}];
	const action = { payload: list };
	const result = associationsReceived(state, action);

	it('should not break with undefined values', () => {
		const result = associationsReceived();
		const expected = { fetching: 'LOADED', all_ids: [], by_id: {} };
		expect(result).toStrictEqual(expected);
	});

	it('should show the fetching is loaded', () => {
		expect(result.fetching).toStrictEqual('LOADED');
	});

	it('should add unique ids to each association', () => {
		const first_id = createUniqueId(list[0].Planilha);
		const second_id = createUniqueId(list[1].Planilha);
		const expected = [first_id, second_id];
		expect(result.all_ids).toStrictEqual(expected);
	});

	it('should lowerCase and normalize all object keys', () => {
		const first_id = createUniqueId(list[0].Planilha);
		const second_id = createUniqueId(list[1].Planilha);
		const expected = {
			[first_id]: {
				associacao: 'ACEM',
				planilha: 'https://docs.google.com/1',
				ativa_ou_nao: 'Sim',
			},
			[second_id]: {
				associacao: 'ABEE - Associação Brasileira de Escalada Esportiva',
				planilha: 'https://docs.google.com/2',
				ativa_ou_nao: 'Não',
			},
		};
		expect(result.by_id).toStrictEqual(expected);
	});
});
