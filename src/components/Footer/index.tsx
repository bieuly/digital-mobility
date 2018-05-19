import * as React from 'react';
import * as styles from './Footer.css';
import RaisedButton from 'material-ui/RaisedButton';
import SocialPeople from 'material-ui/svg-icons/social/people';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.email}><SocialPeople /></div>
                <div className={styles.twitter}>twitter</div>
                <div className={styles.facebook}>facebook</div>
            </div>
        );
    }
}

export default Footer;