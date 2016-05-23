import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import Radium from 'radium';

class MessageForm extends Component {
  getStyles() {
    return {
      card: {
        padding: '20px 10px',
        flexShrink: 0,
      },
      form: {
        textAlign: 'center'
      },
      textField: {
        marginRight: '5px',
        transition: 'none',
        height: '45px',
        width: '80%'
      },
      textarea: {
        marginBottom: '-32px'
      },
      label: {
        fontWeight: '600',
        fontSize: '14px',
        padding: '0 12px',
      }
    };
  }

  render() {
    let styles = this.getStyles();
    return (
      <Card style={styles.card}>
        <form style={styles.form}>
          <TextField
            style={styles.textField}
            textareaStyle={styles.textarea}
            hintText="说点儿什么"
            multiLine={true} />

          <RaisedButton
            labelStyle={styles.label}
            type="submit"
            label="发送"
            secondary={true} />
        </form>
      </Card>
    );
  }
}

export default Radium(MessageForm);
