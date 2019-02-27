import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Form = styled.form`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 48px 48px 48px;
`

const Input = styled.input`
  padding-left: 10px;
`

const Button = styled.button`
  background: papayawhip;
  color: steelblue;
  font-size: 20px;
  border: 3px solid steelblue;
  border-radius: 3px;
`

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    errors: {},
  })

  function onChange(e) {
    setLoginData({ [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()

    const user = {
      email: loginData.email,
      password: loginData.password,
    }
    console.log(user)
    axios
      .post('/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const { email, password } = loginData
  return (
    <React.Fragment>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          type="email"
          placeholder="Enter your email"
          email={email}
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          password={password}
          onChange={onChange}
        />
        <Button>Login</Button>
      </Form>
    </React.Fragment>
  )
}
