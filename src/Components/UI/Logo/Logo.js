import React from 'react';
import logo from '../../../Images/logo.jpg';
import classes from './Logo.module.css';

const Logo = (props) => {
      return (
            <div className={classes.Logo} style={{height: props.height}}>
                  <img src={logo} alt="MyBurger"/>
            </div>
      );
}

export default Logo;