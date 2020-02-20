import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';
import UpcomingEvents from '../components/UpcomingEvents.jsx';
import ReactModal from 'react-modal';

class MainPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  submitForm() {
    const inputName = document.querySelector('#nameInput').value;
    console.log('inputName: ', inputName)
    // if (!!inputName.trim()) {
    //   collectionsController.collectionNameExists({ name: inputName })
    //     .catch((err) => console.error("error in checking collection name: ", err))
    //     .then((found) => {
    //       if (found) { //if the name already exists
    //         document.querySelector('#collectionNameInput').setAttribute("style", "border-color: red;");
    //         document.querySelector('#collectionNameError').setAttribute("style", "display: block");
    //       }
    //       else this.saveCollection(inputName)
    //     })
    // }
  }

  handleOpenModal() {
    this.setState({ ...this.state, showModal: true });
  }

  handleCloseModal() {
    this.setState({ ...this.state, showModal: false });
  }

  handleKeyPress(event) {
    const warning = document.querySelector('#signUpError');
    if (event.key === 'Enter') this.submitForm();
    else if (warning.style.display === 'block') {
      warning.setAttribute("style", "display: none !important");
      document.querySelector('#nameInput').setAttribute("style", "border: 2px solid $yellowgrey !important;");
    }
  }

  render () {
    return (
      <div>
        <div className="maincontainer">
          <div>
            <SideBar
              loggedIn={this.props.loggedIn}
              loginHandleClick={this.props.loginHandleClick}
            />
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          // className="signup"
          // overlayClassName="signupModalOverlay"
          // contentLabel="Sign Up With Email"
          // onRequestClose={this.handleCloseModal}
          // shouldCloseOnOverlayClick={true}
          // aria={{labelledby: "heading"}}
        >
          <h1 id="heading">Sign Up With Email</h1>
          {/* <input type='text' id="nameInput" onKeyDown={(e) => this.handleKeyPress(e)} autoFocus /> */}
          <form action='/signup' method="POST">
            <input type="text" name='email' placeholder='Email'/><br></br>
            <input type="text" name='username' placeholder='Username'/><br></br>
            <input type="text" name='password' placeholder='Password'/><br></br>
            <input type="text" name='first_name' placeholder='First Name' /><br></br>
            <input type="text" name='last_name' placeholder='Last Name' /><br></br>
            <input type="text" name='role' placeholder='Role' /><br></br>
            <input type="text" name='city_name' placeholder='City Name'/><br></br>
            <input type="submit" value="Sign Up" />
          </form>
          <p id="signupError" style={{ display: 'none' }}>Please enter all fields!</p>
          <div>
            {/* <button onClick={this.submitForm}>Submit</button> */}
            <button onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default MainPage;