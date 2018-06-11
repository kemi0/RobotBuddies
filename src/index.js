import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import Card from './components/card'
import registerServiceWorker from './registerServiceWorker';
// import 'tachyons';
// import CardList from './components/cardList'


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
registerServiceWorker();
