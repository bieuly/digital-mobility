import * as React from 'react';
import * as styles from './What.css';
import * as Fade from 'react-reveal/Fade';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Switch, Route } from 'react-router-dom';

const style = {
    margin: '10px 0px 0px 0px',
}

class What extends React.Component {
    render() {
        return (
            <div className={styles.what}>
                <div className={styles.text}>
                    <Fade left>
                        <h1>What we're trying to solve</h1>
                        <section>
                            To make it in today’s economy, you have to hustle. Fast-food worker or CEO, Uber driver or student,
                            you have to stay connected in an economy built on the assumption that anyone is always reachable anywhere.
                            In 2017, that means you need a smartphone. 
                            You can apply for jobs via your smartphone, arrange childcare, or trade shifts with your co-workers.
                            For homeless people who use the internet to find beds at shelters or apply for jobs, a smartphone could be a literal lifesaver. 
                            <p><Link to='learnMore'><RaisedButton label="Learn more" primary={false} style={style}/></Link></p>
                        </section>
                    </Fade>
                </div>
                <div className={styles.image}>
                    <Fade right>
                        image here
                    </Fade>
                </div>
            </div>
        );
    }
}

export default What;