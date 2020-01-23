import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";


export const UserForm = ({ disabled, error, onSubmit, title }) => {

  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  }

  return (
    <React.Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="Email" type="email" {...email} disabled={disabled}/>
        <Input placeholder="Password" type="password" {...password} disabled={disabled}/>
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </React.Fragment>
  );
}