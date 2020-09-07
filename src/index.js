import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { store, persistedStore, history } from './store/store';
import Routes from './Routes';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <ConnectedRouter history={history}>
                <Routes history={history} store={store} />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);