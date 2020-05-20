import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import AllPages from './pages/AllPages';

const Routes = () => (
	<Switch>
		<Route path="/:page" exact component={AllPages} />
		<Route path="*" exact component={AllPages} />
	</Switch>
);

export default Routes;
