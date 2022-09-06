import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {AuthActions} from "./store/reducers/auth/actions";

const root = ReactDOM.createRoot(document.getElementById('root'));
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
if (email && password) {
    store.dispatch(AuthActions.login({email, password}));
}


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

