import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { creatStore } from 'redux';
import { searchRobots } from './reducers';
// import Card from './components/card'
import registerServiceWorker from './registerServiceWorker';
// import 'tachyons';
// import CardList from './components/cardList'

const store = createStore(searchRobots)

ReactDOM.render(
    <App store={store} />
    , document.getElementById('root'));
registerServiceWorker();
