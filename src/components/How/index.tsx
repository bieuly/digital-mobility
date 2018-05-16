import * as React from 'react';
import * as styles from './How.css';

class How extends React.Component {
    render() {
        return (
            <div className={styles.how}>
                <h1 className={styles.title}>How we'll do it</h1>
                <div className={styles.step1}>
                    <div>
                        <h2>Step 1</h2>
                        <section>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex metus. amet, consectetur adipiscing elit. Sed sed ex metus. amet, consectetur adipiscing elit. Sed sed ex metus.
                        </section>
                    </div>
                    <div>image here</div>
                </div>
                <div className={styles.step2}>
                    <div>
                        <h2>Step 2</h2>
                        <section>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex metus.
                        </section>
                    </div>
                    <div>image here</div>
                </div>
                <div className={styles.step3}>
                    <div>
                        <h2>Step 3</h2>
                        <section>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex metus.
                        </section>
                    </div>
                    <div>image here</div>
                </div>
            </div>
        );
    }
}

export default How;