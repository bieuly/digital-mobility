import * as React from 'react';
import * as styles from './Why.css';
import * as Fade from 'react-reveal/Fade';

class Why extends React.Component {
    render() {
        return (
            <div className={styles.why}>
                <div className={styles.image}>
                    <Fade left>
                        image here
                    </Fade>
                </div>
                <div className={styles.text}>
                    <Fade right>
                        <h1>Why we do it</h1>
                        <section>
                            People from every economic stratum use them to stay in contact.
                            By providing homeless individuals with just a bit of mobile data, we can reconnect them with friends and families,
                            and build stronger networks in our marginalized communities. 
                        </section>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Why;