import * as React from 'react';
import * as styles from './What.css';

class What extends React.Component {
    render() {
        return (
            <div className={styles.what}>
                <div>
                    <h1>What we're trying to solve</h1>
                    <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ex metus.
                    Aliquam dictum leo sed nunc rutrum posuere id a nulla. Curabitur vulputate lacus accumsan nisl
                    mollis, non varius augue ornare. Praesent suscipit vitae nisl ac tempus. Donec cursus nisi quis
                    tortor dapibus, nec ultrices odio condimentum. Ut vel porttitor est.
                    Aliquam aliquet ipsum vitae facilisis rhoncus. Integer vehicula tortor et ante dignissim finibus.
                    </section>
                </div>
                <div>
                    image here
                </div>
            </div>
        );
    }
}

export default What;