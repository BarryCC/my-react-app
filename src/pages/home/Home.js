import React, { Component } from 'react';

/********************* 例2 *********************/
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

/********************* 例3 form表单应用 *********************/
class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      value: value
    });
    /**
   * [name]: value:相当于ES5
   * var partialState = {};
   * partialState[name] = value;
   * this.setState(partialState);
   */
    // 此处状态值为setState赋值之前的值，可能setState是异步操作？
    console.log(this.state[name]);
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input 
            name="isGoing" 
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            type="checkbox" />
        </label>
        <br />
        <label>
          number Of Guests:
          <input 
            name="numberOfGuests" 
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            type="number" />
        </label>
        {this.state.value}
      </form>
    );
  }
}

/********************* 例4 命名 插槽使用示例 *********************/
function SplitPane(props) {
  return (
    <div className="dd">
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
  );
}
function Inheritance() {
  return (
    <SplitPane 
      left={
        <div>left</div>
      }
      right={
        <div>right</div>
      }
    />
  );
}

/********************* 例5 插槽使用示例 *********************/
function FancyBorder(props) {
  return (
    <div className={'fancyBoder FancyBoder-' + props.color}>
      {props.children}
    </div>
  );
}
function Dialog(props) {
  return (
    <FancyBorder color="bule">
      <h1 className="title">
        {props.title}
      </h1>
      <p className="message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}
class SignUpDialog extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.state = {login: ''}
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.value}!`);
  }

  render() {
    return (
      <Dialog title="title" message="message">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign up</button>
      </Dialog>
    );
  }
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    /******************** 例1 改变this指向 *********************/
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <div className="home">
        <h1>例1</h1>
        {/* (e) => this.handleClick(e) 此种情况就不需要bind this */}
        <button onClick={this.handleClick}>
          Click me
        </button>

        <h1>例2</h1>
        <LoginControl />

        <h1>例3</h1>
        <Reservation />

        <h1>例4</h1>
        <Inheritance />
      </div>
    );
  }
}

export default Home;