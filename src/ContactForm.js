import React from "react";
import { Form, } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = { firstName: "", phone: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ firstName: "", phone: "", });
    this.props.add(this.state)
    // Where should this function be defined???
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="First Name" 
            placeholder="First Name" 
            name="firstName" 
            value={this.state.name} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Phone" 
            placeholder="Phone" 
            name="phone" 
            value={this.state.phone} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default ContactForm;