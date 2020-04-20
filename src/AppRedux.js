import React from 'react';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import reducer from './reducer';

import App from './App';
import Siswa from './componentsRedux/Siswa';
import Sekolah from './componentsRedux/Sekolah';

const store = createStore(reducer);

export default () => {
    return (
        <Provider store={store}>
            <App />
            <br/>
            <br/>
            <br />
            <Siswa/>
            <Sekolah/>
        </Provider>
    )
}