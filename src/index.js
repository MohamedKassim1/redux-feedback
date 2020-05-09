import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reviewReducerInitialState = {};

const myReviewReducer = (state = reviewReducerInitialState, action) => {
    console.log('myReviewReducer');

}
const myStore = createStore(myReviewReducer)

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
