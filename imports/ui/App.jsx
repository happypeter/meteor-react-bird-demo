import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Radium, { StyleRoot } from 'radium';
import AppBar from 'material-ui/AppBar';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './shared/NavBar.jsx';
import AppDrawer from './shared/AppDrawer.jsx';
import LogOutMenu from './auth/LogOutMenu.jsx';

class App extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

  componentWillMount() {
    let setNavBarState = () => {
      this.setState({renderNavBar: window.innerWidth > 700});
    };
    setNavBarState();
    window.onresize = setNavBarState;
  }

  getStyles() {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        minHeight: '100vh',
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <StyleRoot>
        <div style={styles.root}>
          { this.state.renderNavBar ? <NavBar currentUser={this.props.currentUser} userInfo={this.props.userInfo} /> :
           (this.props.currentUser ? this.getLoginAppBar() : this.getAppBar()) }
          <AppDrawer ref='drawer' currentUser={this.props.currentUser} />
          { this.props.children }
        </div>
      </StyleRoot>
    );
  }

  handleTouchTap() {
    this.refs.drawer.handleToggle();
  }

  getAppBar() {
    return (
      <AppBar onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)} style={{flexShrink: 0}}/>
    );
  }

  getLoginAppBar() {
    return (
      <AppBar onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
        style={{flexShrink: 0}}
        iconStyleRight={{marginTop: 0}}
        iconElementRight={<LogOutMenu username={this.props.userInfo ? this.props.userInfo.username : ''}/>}/>
    );
  }
}

 App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

App.propTypes = {
  currentUser: React.PropTypes.string,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.userId(),
    userInfo: Meteor.user()
  };
}, Radium(App));
