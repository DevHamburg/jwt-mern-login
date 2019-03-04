import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import classnames from 'classnames'

const Form = styled.form`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: auto;
`

const Input = styled.input`
  height: 48px;
  padding-left: 10px;
  border-radius: 4px;
  border: 2px solid lightgray;

  &.is-valid {
    border-radius: 4px;
    border: 2px solid lightblue;
  }

  &.is-invalid {
    border-radius: 4px;
    border: 2px solid red;
  }
`

const Button = styled.button`
  height: 48px;
  background: papayawhip;
  color: steelblue;
  font-size: 20px;
  border: 3px solid steelblue;
  border-radius: 3px;
  border-radius: 4px;
`

const Validation = styled.div`
  font-family: system-ui;
  padding-left: 10px;
  font-size: 12px;
  color: gray;
`

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    errors: {},
  })

  function onChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
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
      .catch(err => setLoginData({ ...loginData, errors: err.response.data }))
  }

  const { email, password, errors } = loginData
  return (
    <React.Fragment>
      <Form noValidate onSubmit={onSubmit} loginData={loginData}>
        {errors.email && <Validation>{errors.email}</Validation>}

        <Input
          className={classnames('is-valid', { 'is-invalid': errors.email })}
          email={email}
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={onChange}
        />

        {errors.password && <Validation>{errors.password}</Validation>}

        <Input
          className={classnames('is-valid', { 'is-invalid': errors.password })}
          password={password}
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={onChange}
        />
        <Button>Login</Button>
      </Form>
    </React.Fragment>
  )
}
