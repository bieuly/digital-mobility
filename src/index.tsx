import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './reset.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter } from 'react-router-dom';

render(
    <HashRouter>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </HashRouter>,
    document.getElementById('root')
);