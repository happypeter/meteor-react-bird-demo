import React, { Component } from 'react';
import { Link } from 'react-router';

class LogIn extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
        This is log in page.
      </div>
    );
  }
}

export default LogIn;
