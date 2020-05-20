import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import AllPages from './pages/AllPages';
// import Page1 from './pages/Page1';

const Routes = () => (
	<Switch>
		{/* <Route path="/associado/:id" exact component={Associado} /> */}
		{/* <Route path="/validar/:id" exact component={Validar} /> */}
		<Route path="/" exact component={AllPages} />
		<Route path="*" exact component={AllPages} />
	</Switch>
);

export default Routes;
