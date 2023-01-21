/* eslint-disable no-useless-constructor */
import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log('paret - constructor');
    //Cretae State
    this.state = {
      count: 12,
      userInfo: {
        name: '',
        company: '',
        location: '',
      },
    };
  }

  async componentDidMount() {
    // Place to make API calls
    console.log('parent ComponentDidMount');
    const data = await fetch('https://api.github.com/users/Prince1992');
    const data1 = await data.json();
    this.setState({
      userInfo: data1,
    });

    // this.interval = setInterval(() => {
    //   console.log('Amar set Interval');
    // }, 1000);
  }

  componentWillUnmount() {
    //console.log('Unmounting');
    //clearInterval(this.interval);
  }
  render() {
    console.log('parent - render');
    const { count } = this.state;
    const { name, location, company } = this.state.userInfo;
    return (
      <div>
        <h1>Profile Class Based Component</h1>
        <h2>{name}</h2>
        <h2>{count}</h2>
        <h2>Name ---{name}</h2>
        <h2>Location ---- : {location}</h2>
        <h2>Company ---- : {company}</h2>
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
