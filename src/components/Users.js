import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Users extends Component {
  render() {
    const usernames = this.props.users.map((user, index) => <li key={index}>{user.userName}</li>);
    return(
        <div>
          <ul>
            {usernames}
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users);
