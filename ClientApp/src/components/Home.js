import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome </h1>
        <p>Use this manager to manager your transactions</p>
        <ul>
                <li>Add a member</li>
                <li>Update a member</li>
                <li>Delete a memberp</li>
                <li>Show all members</li>
            </ul>
        </div>
    );
  }
}
