import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { MyProvider  } from './context';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise';
import reducers from './store/reducers/index'
import App from './App';
import React from 'react';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);
const provider = () => (
    <MyProvider>
        <Provider store={storeWithMiddleware}>
            <App />
        </Provider>
    </MyProvider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
