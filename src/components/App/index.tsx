import * as React from 'react';
import * as styles from './App.css';
import Hero from '../Hero';
import What from '../What';
import Why from '../Why';
import How from '../How';
import Footer from '../Footer';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div>
                    <Hero/>
                </div>
                <div className={styles.content}>
                    <What/>
                    <Why/>
                    <How/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;