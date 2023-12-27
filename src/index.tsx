import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.less';
import App from '@/App';
import store from './store';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
