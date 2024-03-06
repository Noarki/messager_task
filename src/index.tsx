import React from 'react';
import ReactDOM from 'react-dom/client';

import 'moment/locale/ru';

import Main from './pages/Main';
import { Provider } from 'react-redux';
import { setupStore } from './_data/store/store';
import moment from 'moment';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

moment.locale('ru');

root.render(
    <Provider store={setupStore()}>
        <Main />
    </Provider>
);
