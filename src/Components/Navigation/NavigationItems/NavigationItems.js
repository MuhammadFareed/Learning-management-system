import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
      <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active >Home</NavigationItem>
            <NavigationItem link="/" >New & Events</NavigationItem>
            <NavigationItem link="/" >About</NavigationItem>
            <NavigationItem link="/" >Contact</NavigationItem>
            <NavigationItem link="/" >LogIn</NavigationItem>

      
      </ul>
);

export default NavigationItems;
