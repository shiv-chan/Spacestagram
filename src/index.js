import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<AppProvider i18n={enTranslations}>
			<App />
		</AppProvider>
	</Provider>,
	document.getElementById('root')
);
