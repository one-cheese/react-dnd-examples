import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './index.css';
// import App from './App';
// import App from './examples-hook/00-chessboard';
// import App from './examples-hook/01-dustbin/copy-or-move';
// import App from './examples-hook/01-dustbin/multiple-targets';
// import App from './examples-hook/01-dustbin/single-target';
// import App from './examples-hook/01-dustbin/single-target-in-iframe';
import App from './examples-hook/01-dustbin/stress-test';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
