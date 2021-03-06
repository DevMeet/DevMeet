import React, { Component } from "react";
import ReactModal from 'react-modal';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showModal: false,
        }
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.authenticate = this.authenticate.bind(this);
    };
    
    handleOpenModal() {
      this.setState({ ...this.state, showModal: true });
    }
  
    handleCloseModal() {
      this.setState({ ...this.state, showModal: false });
    }

    authenticate() {

    }

    render() {
      return (
        <div id="login-box">
          <div class="left">
          <ReactModal
          isOpen={this.state.showModal}
        >
          <h1 id="heading">Please Log In</h1>
          <form action='/login' method="POST">
            <input type="text" name='username' placeholder='Username'/><br></br>
            <input type="password" name='password' placeholder='Password'/><br></br>
            <input className="loginbtt" type="submit" onClick={this.authenticate} value="Login" />
          </form>
          <div>
            <button className="loginbtt" onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </ReactModal>
        </div>
        </div>
      )
    }
}

export default Login;