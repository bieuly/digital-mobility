import * as React from 'react';
import * as styles from './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
            <div className={styles.email}>email</div>
            <div className={styles.twitter}>twitter</div>
            <div className={styles.facebook}>facebook</div>
            </div>
        );
    }
}

export default Footer;