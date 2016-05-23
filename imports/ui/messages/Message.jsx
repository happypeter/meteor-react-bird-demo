import React, { Component } from 'react';
import Radium from 'radium';
import moment from 'moment';

class Message extends Component {
  getStyles() {
    return {
      message: {
        fontSize: '16px',
        lineHeight: '16px',
        position: 'relative',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        paddingLeft: '62px',
        paddingRight: '10px',
        paddingBottom: '16px',
        paddingTop: '20px'
      },
      img: {
        border: '1px solid rgba(0, 0, 0, 0.08)',
        height: '40px',
        width: '40px',
        display: 'inline-block',
        position: 'absolute',
        top: '16px',
        left: '10px',
      },
      avatar: {
        textAlign: 'center',
        lineHeight: '40px',
        fontSize: '24px',
        color: '#fff',
        backgroundColor: '#bdbdbd',
        border: 'none',
      },
      owner: {
        marginTop: '-6px'
      },
      date: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '12px',
        position: 'absolute',
        right: '10px'
      },
      content: {
        fontSize: '14px',
        lineHeight: '16px',
        marginTop: '6px',
        color: 'rgba(0, 0, 0, 0.54)'
      }
    }
  }
  render() {
    let styles = this.getStyles();
    let message = this.props.message;
    let avatar;
    if(message.avatar_url === null) {
      avatar = <div style={[styles.img, styles.avatar]}>{message.owner.charAt(0).toUpperCase()}</div>;
    } else {
      avatar = <img style={styles.img} src={message.avatar_url}/>;
    }

    return (
      <div style={styles.message}>
        { avatar }
        <div style={styles.owner}>
          <span>{message.owner}</span>
          <span style={styles.date}>{ moment(message.createdAt).fromNow() }</span>
        </div>
        <div style={styles.content}>{message.content}</div>
      </div>
    );
  }
}

export default Radium(Message);
