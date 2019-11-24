import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBIcon, MDBIframe } from "mdbreact";
import './Team.css'

class IframePage extends Component {
state = {
  modal11: false,
}

toggle = nr => () => {
  let modalNumber = "modal" + nr;
  this.setState({
    ...this.state,
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle(11)}>View Highlights</MDBBtn>
      <MDBModal size="lg" isOpen={this.state.modal11} toggle={this.toggle(11)}>
        <MDBModalBody className="mb-0 p-0">
          <MDBIframe title="This is a unique title" src="https://www.scorebat.com/embed/" />
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <span className="mr-4">Spread the word!</span>
          <MDBBtn tag="a" size="sm" floating social="fb">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn tag="a" size="sm" floating social="tw">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn tag="a" size="sm" floating social="gplus">
            <MDBIcon fab icon="google-plus-g" />
          </MDBBtn>
          <MDBBtn tag="a" size="sm" floating social="li">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn color="primary" outline rounded size="md" className="ml-4" onClick={this.toggle(11)}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default IframePage;