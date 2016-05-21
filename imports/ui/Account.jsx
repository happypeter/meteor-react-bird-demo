import React, { Component } from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Radium from 'radium';

class Account extends Component {
  render() {
    let styles = {
      root: {
        flexGrow: 1,
        overflowY: 'scroll',
        paddingTop: '64px',
        paddingLeft: '16px',
        paddingRight: '16px'
      },
      card: {
        maxWidth: '700px',
        margin: '20px auto',
        padding: '20px',
      }
    };

    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <form>
            <TextField
              hintText="GitHub Account"
              ref='username'/>

            <FlatButton
              type="submit"
              primary={true}
              label="search github" />
          </form>
        </Card>
      </div>
    );
  }
}

export default Radium(Account);
