import React, { Component } from 'react';
import map from 'lodash/fp/map';
import Radium from 'radium';

import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    let styles = {
      list: {
        flexGrow: 1,
        overflowY: 'auto',
      }
    };

    const allMessages = map((message) => {
      return (
        <Message message={message} key={message._id} />
      );
    }, this.props.messages);

    return (
      <div style={styles.list}>
        <div>
          { allMessages }
        </div>
      </div>
    );
  }
}

export default Radium(MessageList);
