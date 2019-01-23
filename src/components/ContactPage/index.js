import React, { Component } from 'react';
import "./ContactPage.css";
import AlinaPhoto from "../../images/AlinaPortrait2018.png";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        organization: "",
        email: "",
        subject: "",
        emailText: ""
      },
      messageStatus: undefined,
    }
  }

  messageSentAlert() {
    return (
      <div style={{margin: '20px auto'}} className="sent-message-alert">
        <p style={{margin: '20px auto'}}>
          Your message was sent successfully!
        </p>
        <button className="close-button" onClick={(e)=>this.handleClose(e)}></button>
      </div>
    );
  }
  messageFailedAlert() {
    return (
      <div style={{margin: '20px auto'}} className="sent-message-alert failed-alert">
        <p style={{margin: '20px auto'}}>
          Something went wrong. Your message was not sent.
        </p>
        <button className="close-button" onClick={(e)=>this.handleClose(e)}></button>
      </div>
    );
  }
  displayMessageStatus() {
     if(this.state.messageStatus === "successful") {
       return this.messageSentAlert();
     } else if (this.state.messageStatus === "failed") {
       return this.messageFailedAlert();
     }
  }

  sendEmailRequest(message) {
    fetch(`https://alinalodahl.herokuapp.com/api/contact`, {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://alinalodahl.herokuapp.com/contact"
      }
    })
    .then(res => {
      if (!res.ok) {
        this.setState({message: "failed"});
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(() => this.setState({message: "successful"}))
    .catch(err => {
      console.log(err);
    });
}

  handleInput(e, field) {
    e.preventDefault();
    let input = e.target.value;
    let newForm = this.state.form;
    newForm[field] = input;
    this.setState({ newForm });
  }

  handleSubmit(e) {
    e.preventDefault();
    let validated = this.state.form.name && this.state.form.email && this.state.form.subject && this.state.form.emailText;
    if (validated) {
      this.sendEmailRequest(this.state.form);
      this.setState({ form: {
        name: "",
        organization: "",
        email: "",
        subject: "",
        emailText: ""
      } });
      window.scrollTo(0, 0);
    } else {
      alert("Be sure to enter your name, email address, subject, and message text so we can send your message.");
    }
  }

  handleClose(e){
    e.preventDefault();
    this.setState({ messageStatus: undefined });
  }

  render() {
    return (
      <div className="contact-form">
        <form>
          {this.state.messageStatus ? this.displayMessageStatus(): null}
          <div className="form-header-div">
            <img className="portrait-small" alt="Alina Lodahl Portrait" src={AlinaPhoto}/>
            <h2 className="message--contactpage">
              Use this form to send me a message.
              <br/>
              I look forward to hearing from you!
            </h2>
          </div>
          <div className="form-inputs-div">
            <label htmlFor="name" className="name-label first-name">
              full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block block-input"
              value={this.state.form.name}
              autoComplete='name'
              onChange={(e) => this.handleInput(e, "name")}
            />
            <label htmlFor="organization" className="name-label">
              organization
            </label>
            <input
              type="text"
              name="organization"
              id="organization"
              className="block block-input"
              value={this.state.form.organization}
              autoComplete='organization'
              onChange={(e) => this.handleInput(e, "organization")}
            />
            <label htmlFor="email" className="block">
              email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block block-input"
              value={this.state.form.email}
              autoComplete='email'
              onChange={(e) => this.handleInput(e, "email")}
            />
            <label htmlFor="subject" className="block">
              message subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block block-input"
              value={this.state.form.subject}
              autoComplete='subject'
              onChange={(e) => this.handleInput(e, "subject")}
            />
            <label htmlFor="email-text" className="block">
              please enter your message here:
            </label>
            <textarea
              type="text"
              name="email-text"
              id="email-text"
              className="block block-input issue"
              value={this.state.form.emailText}
              onChange={(e) => this.handleInput(e, "emailText")}
            >
            </textarea>
          </div>
          <div className="extra"></div>
          <button className="send-message-button js-send-message-button" type="submit" onClick={(e)=>this.handleSubmit(e)}>send message</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
