import React, { Component } from 'react';
import Radium from 'radium';

class UserInfo extends Component {
  getStyles() {
    return {
      img: {
        display: 'block',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '30px auto'
      },
      ul: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        listStyle: 'none',
        paddingLeft: 0
      },
      li: {
        flexGrow: 1,
        borderLeft: '1px solid rgba(0,0,0,0.1)'
      },
      span: {
        display: 'block',
        fontSize: '14px'
      },
      b: {
        display: 'block',
        fontSize: '16px',
        marginBottom: '10px'
      }
    }
  }
  render() {
    let userInfo = this.props.userInfo;
    let styles = this.getStyles();
    return (
      <div>
        <img src={ userInfo.avatar_url } style={styles.img}/>
        <ul style={styles.ul}>
          <li style={[styles.li, {borderLeft: 'none'}]}>
            <b style={styles.b}>{ userInfo.followers }</b>
            <span style={styles.span}>followers</span>
          </li>
          <li style={styles.li}>
            <b style={styles.b}>{ userInfo.following }</b>
            <span style={styles.span}>following</span>
          </li>
          <li style={styles.li}>
            <b style={styles.b}>{ userInfo.public_repos }</b>
            <span style={styles.span}>repos</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium(UserInfo);
