import React, { Component } from 'react';
import './LandingHeader.css';
import { Modal, Button, OverlayTrigger } from 'react-bootstrap';


class LandingHeader extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }    
    render() {
        return (
            <header>
                <div class="cf ph2-ns">
                        <div className = "fl w-60 pa2">
                            <div className="landingheader--title">Cornell Outing Club</div>
                        </div>
                        <div className = "fl w-40 pa2">
                            <div className="landerheader--form">
                                <Button onClick={this.handleShow}><div className="header--listserv">Join the ListServ</div></Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title><h2 className="modal--header">Instructions to join the listserv</h2></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="modal--body">To subscribe to our listserv, send an email to <span><a href="mailto:outdoor-l@cornell.edu?Subject=join">outdoor-l@cornell.edu</a></span> with "join" as the subject.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleClose}>Close</Button>
                                </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                </div>
                       
            </header>
        );
    }
}

export default LandingHeader;