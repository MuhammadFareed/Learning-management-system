import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import Header from '../Header/Header';

class Layout extends Component {
      state = {
            showSideDrawer : false
      }
      sideDrawerClosedHandler = () => {
            this.setState({
                  showSideDrawer : false
            })
      }
      sideDrawerToggleHandler = () => {
            this.setState((prevState) => {
                  return { showSideDrawer : !prevState.showSideDrawer };
            });
      }
      render() {
            return (
                  <Auxilliary>
                        <Header/>
                        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                        <SideDrawer
                              open={this.state.showSideDrawer}
                              closed={this.sideDrawerClosedHandler}     
                        />
                        <main className={classes.Content}>
                              {this.props.children}
                        </main>Helllo
                  </Auxilliary>
            );
      }
}

export default Layout;