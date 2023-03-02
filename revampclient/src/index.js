import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AquaRoutes from './routes/routes';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension"
import { Provider } from 'react-redux';


const store = createStore(rootReducer , composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <AquaRoutes/>
  </Provider>
);

