import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import reducers from '../imports/reducers';

Meteor.startup(()=>{
    ReactDOM.render(
        <Provider store={createStore(reducers, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <App />
        </Provider>, document.querySelector('.render-target')
    );
});
