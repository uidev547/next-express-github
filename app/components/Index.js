import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { user, isServer } = this.props;
    return (
      <div>
        <p>isServer  - {isServer.toString()}</p>
        {
            user ?
            <h1>{user.authType} - {user.name}</h1>
            :
            <Link href="/login">
                <a>Login</a>
            </Link>
        }
        <Link href="/login">
            <a>Login1111</a>
        </Link>
      </div>
    )
  }
}

export default Index;
