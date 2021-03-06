import * as React from 'react';
import * as styles from './Logo.css';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  
  render() {
     return (
      <Link to='/'>
        <svg className={styles.logo} viewBox="0 0 24 24">
          <path d="M0.776,12.037c0-6.19,5.019-11.209,11.21-11.209c6.189,0,11.206,5.02,11.206,11.209
            c0,6.192-5.017,11.209-11.206,11.209C5.795,23.246,0.776,18.229,0.776,12.037z M21.44,12.037c0-5.22-4.23-9.454-9.454-9.454
            c-5.222,0-9.454,4.234-9.454,9.454c0,5.221,4.232,9.454,9.454,9.454C17.21,21.491,21.44,17.258,21.44,12.037z"/>
          <path d="M14.995,11.902l-3.684,3.683c-0.182,0.18-0.278,0.418-0.278,0.676c0,0.253,0.096,0.49,0.278,0.671
            c0.37,0.374,0.975,0.372,1.347,0l3.684-3.681c0.18-0.182,0.279-0.42,0.279-0.674c-0.001-0.255-0.1-0.496-0.279-0.675
            C15.97,11.534,15.368,11.529,14.995,11.902z"/>
          <path d="M7.626,13.252l3.685,3.681c0.178,0.181,0.418,0.279,0.673,0.282c0.255-0.003,0.495-0.1,0.674-0.282
            c0.372-0.37,0.371-0.976,0-1.347l-3.684-3.683c-0.182-0.18-0.42-0.28-0.674-0.28c-0.253,0-0.493,0.101-0.674,0.28
            C7.256,12.273,7.255,12.878,7.626,13.252z"/>
          <path d="M11.033,7.876v6.232c0,0.255,0.099,0.494,0.279,0.674c0.181,0.181,0.418,0.281,0.673,0.278
            c0.526,0.003,0.952-0.426,0.952-0.952l0.001-6.232c0.002-0.254-0.097-0.494-0.278-0.674c-0.181-0.178-0.42-0.279-0.675-0.28
            C11.46,6.923,11.033,7.35,11.033,7.876z"/>
          </svg>
      </Link>
     );
   }
  }

  export default Logo;
   