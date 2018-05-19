import * as React from 'react';
import * as styles from './Landing.css';
import Hero from '../Hero';
import What from './What';
import Why from './Why';
import How from './How';

class App extends React.Component {
    render() {
        return (
            <div className={styles.landing}>
                <div><What/></div>
                <div><Why/></div>
                <div><How/></div>
            </div>
        );
    }
}

export default App;