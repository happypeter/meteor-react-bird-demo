import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import typography from './styles/typography';

class LogIn extends Component {
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
        <form style={styles.form}>
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
            label="登录"
            secondary={true} />
        </form>
      </div>
    );
  }
}

export default Radium(LogIn);
