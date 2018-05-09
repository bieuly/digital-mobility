import * as React from 'react';
import Logo from '../Logo';
import * as styles from './App.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.logo}><Logo/></div>
                <div className={styles.nav}>
                    <h1>Digital Mobility</h1>
                </div>
            </div>
        );
    }
}

export default App;