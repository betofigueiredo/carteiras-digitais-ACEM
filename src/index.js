import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import StoreProvider from './store/StoreProvider';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const app = (
	<StoreProvider>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</StoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
