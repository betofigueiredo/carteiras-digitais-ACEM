/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Tabletop from 'tabletop';

// CSS
// import s from './Associado.style';

// Actions
// import { initGlobalRequest } from '../../store/actions';

const Associado = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		Tabletop.init({
			key: '1tNP5PKZ43x1eAgdcu4K580K07VMF-rPa9HHgNLxZoew',
			callback: googleData => {
				console.log('google sheet data --->', googleData)
			},
			simpleSheet: true
		});
	}, []);

	// useLayoutEffect(() => {
	// 	function loadFirstPage() {
	// 		const url = '/v4/spreadsheets/1tNP5PKZ43x1eAgdcu4K580K07VMF-rPa9HHgNLxZoew';
	// 		const action = initGlobalRequest({ url });
	// 		dispatch(action);
	// 	}

	// 	loadFirstPage();
	// }, []);

	return (
		<div>
			Associado
		</div>
	);
};

export default Associado;
