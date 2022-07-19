import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './configStore';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'antd/dist/antd.variable.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as signalR from '@microsoft/signalr'
import { DOMAIN } from './Util/Settings/config';
import i18n from './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));

export const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information)
    .build();

 
root.render(
 <Provider store={store} >

    <App />
 </Provider>
 
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
