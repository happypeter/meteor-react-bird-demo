import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import map from 'lodash/fp/map';
import size from 'lodash/fp/size';
import Radium from 'radium';

class UserList extends Component {
  render() {
    let styles = {
      root: {
        overflow: 'visible',
        flexShrink: 0,
        padding: '10px',
      },
      h3: {
        marginTop: '15px',
        marginBottom: '10px',
        fontWeight: '500',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.75)',
      },
      ul: {
        paddingLeft: 0
      },
      li: {
        display: 'inline-block',
        marginRight: '10px',
        verticalAlign: 'top'
      },
      div: {
        textAlign: 'center',
        marginTop: '4px'
      },
      letter: {
        width: '38px',
        height: '38px'
      },
      img: {
        display: 'block',
        border: 'none'
      }
    };

    const allOnlineUsers = map((user) => {
      let avatar;
      if(user.avatar_url === undefined) {
        avatar = <Avatar style={styles.letter}>{user.username.charAt(0).toUpperCase()}</Avatar>;
      } else {
        avatar = <Avatar src={user.avatar_url} style={styles.img} />;
      }
      return (
        <li key={user._id} style={styles.li}>
          { avatar }
          <div style={styles.div}>{user.username}</div>
        </li>
      );
    }, this.props.users);

    return (
      <Card style={styles.root}>
        <h3 style={styles.h3}>在线人数 {size(this.props.users)}</h3>
        <ul style={styles.ul}>
          { allOnlineUsers }
        </ul>
      </Card>
    );
  }
}
export default Radium(UserList);
