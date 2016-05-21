import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { Accounts } from 'meteor/accounts-base';

import typography from '../styles/typography';

class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault();

    let userName = this.refs.userName.getValue();
    let password = this.refs.password.getValue();

    Accounts.createUser({
      username: userName,
      password: password
    }, (error) => {
      if (error) {
        console.log(error.reason);
        return;
      }
      this.context.router.push('/account');
    });
  }

  getStyles() {
    return {
      root: {
        minHeight: '400px',
        textAlign: 'center',
        padding: '6em 2em',
        '@media (min-width: 500px)': {
          width: '500px',
          margin: '0 auto'
        }
      },
      form: {
        margin: '30px auto 0'
      },
      textField: {
        display: 'block',
        width: '100%'
      },
      floatingLabel: {
        fontSize: typography.fontSmallSize
      },
      label: {
        lineHeight: '50px',
        fontWeight: '600',
        fontSize: typography.fontSmallSize
      },
      button: {
        height: '50px',
        width: '200px',
        marginTop: '50px',
        marginBottom: '15px'
      }
    };
  }

  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <form onSubmit={ this.handleSubmit.bind(this) } style={styles.form}>
          <TextField
            ref="userName"
            style={styles.textField}
            floatingLabelText="用户名"
            floatingLabelStyle={styles.floatingLabel} />
          <TextField
            ref="password"
            style={styles.textField}
            floatingLabelText="密码"
            floatingLabelStyle={styles.floatingLabel}
            type="password" />
          <RaisedButton
            style={styles.button}
            labelStyle={styles.label}
            type="submit"
            label="注册"
            secondary={true} />
        </form>
      </div>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Radium(SignUp);

