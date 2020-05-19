import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import ChooseAssociation from './pages/ChooseAssociation';
import Page1 from './pages/Page1';

const Routes = () => (
	<Switch>
		{/* <Route path="/associado/:id" exact component={Associado} /> */}
		{/* <Route path="/validar/:id" exact component={Validar} /> */}
		<Route path="/" exact component={ChooseAssociation} />
		<Route path="*" exact component={Page1} />
	</Switch>
);

export default Routes;
