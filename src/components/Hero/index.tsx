import * as React from 'react';
import * as styles from './Hero.css';
import Logo from '../Logo';

class Hero extends React.Component {
    render() {
        return (
            <div className={styles.hero}>
                <div>
                    <Logo/>
                </div>
                <div className={styles.heading}>
                    <p>Bridging the Digital Divide</p>
                </div>
            </div>
        );
    }
}

export default Hero;