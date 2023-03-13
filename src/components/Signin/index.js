import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Container,
  FormWrap,
  Form,
  Label,
  FormInput,
  FormButton,
  Form1
} from "../Signin/SigninElements";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyapgvq");
  if (state.succeeded) {
      return <Container><Form1><p>Thanks for emailing us! We will be in contact soon!</p></Form1></Container>;
  }
  return (
    
    <Container>
      <FormWrap>
      <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">
        Contact Us
      </Label>
      <FormInput
        id="email"
        type="email" 
        name="email"
        placeholder='Email Address'style={{alignItems:'center'}}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <FormInput
        id="message"
        name="message"
        placeholder= 'City and State' style={{alignItems:'center'}}
      />
      <FormInput
      id="message"
      name="message"
      placeholder= 'Current Position' style={{alignItems:'center'}}
    />
      <FormInput
        id="message"
        name="message"
        placeholder= 'Enter Your Message Here' style={{alignItems:'center'}}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <FormButton type="submit" disabled={state.submitting}>
        Submit
      </FormButton>
    </Form>

      </FormWrap>
    </Container>

  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

