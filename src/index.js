import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import Axios from 'axios';
// import { response } from 'express';

 const reviewReducerInitialState = 0;

const myReviewReducer = (state = reviewReducerInitialState, action) => {
    console.log('myReviewReducer', state, action);
    if (action.type === 'feelings') {
        return {...state, feeling: action.payload}
    } else if (action.type === 'understanding') {
        return {...state, understanding: action.payload}
    } else if (action.type === 'support') {
        return  {...state, support: action.payload}
    } else if (action.type === 'comments') {
        return {...state, comment: action.payload}
    }
    return state;

}
const myStore = createStore(myReviewReducer)

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
