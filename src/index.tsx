import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './pages/Main';
import { Provider } from 'react-redux';
import { setupStore } from './_data/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={setupStore()}>
        <Main />
    </Provider>
);
