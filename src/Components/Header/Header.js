import React from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
      return (
            <div className={classes.Header}>
                  <span> Have any query? </span>
                  
                  {/* For emHeaderail */}
                  <span style={{marginLeft: '20px'}}><FontAwesomeIcon icon={faEnvelope} /></span>
                  <span> fareedalam873@gmail.com</span>
            
                  {/* For phone */}
                  <span style={{marginLeft: '20px'}}><FontAwesomeIcon icon={faPhone} /></span>
                  <span> +92 340 33626</span>
            </div>
      );
}

export default Header;
