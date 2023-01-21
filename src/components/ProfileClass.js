/* eslint-disable no-useless-constructor */
import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Cretae State
    this.state = {
      count: 12,
    };
  }
  render() {
    const { count } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h1>Profile Class Based Component</h1>
        <h2>{name}</h2>
        <h2>{count}</h2>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default Profile;
