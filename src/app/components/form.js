import { useState } from "react";
import { Form, FormGroup, Input, Label, Col, Button} from 'reactstrap';

const FormEmail = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    const handleOnChangeEmail = (ev) => {
        setEmail(ev.target.value);
    };

    const handleOnChangeName = (ev) => {
      setFullName(ev.target.value);
  };

  const handleOnChangeMessage = (ev) => {
    setMessage(ev.target.value);
  }

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        console.log(email, fullName, message);
    };

  return (
    <div className="form-container justify-content-center">
      <h4>Contact me</h4>
      <div className="col-6">
      <Form onSubmit={handleOnSubmit}>
        <FormGroup row>
      <Label
        for="exampleEmail"
        sm={3}
      >
        Email
      </Label>
      <Col sm={12}>
        <Input
          id="exampleEmail"
          name="email"
          type="email"
          value={email}
          onChange={handleOnChangeEmail}
          required
        />
      </Col>
        </FormGroup>
        <FormGroup row>
      <Label
        for="name"
        sm={3}
      >
        Name
      </Label>
      <Col sm={12}>
        <Input
          id="name"
          name="name"
          value={fullName}
          onChange={handleOnChangeName}
          required
          type="text"
        />
      </Col>
        </FormGroup>
        <FormGroup row>
      <Label
        for="exampleText"
        sm={3}
      >
        Message
      </Label>
      <Col sm={12}>
        <Input
          id="exampleText"
          name="text"
          value={message}
          onChange={handleOnChangeMessage}
          required
          type="textarea"
        />
      </Col>
        </FormGroup>
      <Col
        sm={{
          offset: 2,
          size: 10
        }}
      >
        <Button className="btn-form">
          Submit
        </Button>
      </Col>
      
      </Form>
      
      </div>
    </div>

  )
}


export default FormEmail;