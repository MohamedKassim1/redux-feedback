import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reviewReducerInitialState = [];
const myReviewReducer = (state = reviewReducerInitialState, action) => {
    console.log('myReviewReducer', state, action);
    if(action.type === 'feelings'){
        state = [...state, action.payload]
    }else if(action.type === 'understanding'){
        state = [...state, action.payload]
    }else if(action.type === 'support'){
        state = [...state, action.payload]
    }else if(action.type === 'comments'){
        state = [...state, action.payload]
    }else{
        return state;
    }

}
const myStore = createStore(myReviewReducer)

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
