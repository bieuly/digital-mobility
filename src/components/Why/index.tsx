import * as React from 'react';
import * as styles from './Why.css';

class Why extends React.Component {
    render() {
        return (
            <div className={styles.why}>
                <div className={styles.image}>
                    image here
                </div>
                <div className={styles.text}>
                    <h1>Why we do it</h1>
                    <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex metus.
                    Aliquam dictum leo sed nunc rutrum posuere id a nulla. Curabitur vulputate lacus accumsan nisl
                    mollis, non varius augue ornare. Praesent suscipit vitae nisl ac tempus. Donec cursus nisi quis
                    </section>
                </div>
            </div>
        );
    }
}

export default Why;