import * as React from 'react';
import * as styles from './App.css';
import Hero from '../Hero';
import Landing from '../Landing';
import Footer from '../Footer';
import { Switch, Route } from 'react-router';
import LearnMore from '../LearnMore';

class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div>
                    <Hero/>
                </div>
                <div className={styles.content}>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/learnMore' component={LearnMore}/>
                    </Switch>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;