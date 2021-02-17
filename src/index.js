import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from './context/ModalContext';

import App from './App';

ReactDOM.render(
    <ModalProvider>
        <App />
    </ModalProvider>,
    document.getElementById("root")
);