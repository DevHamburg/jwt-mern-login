import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
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
const Validation = styled.div`
  font-family: system-ui;
  padding-left: 10px;
  font-size: 12px;
  color: gray;
`

const Button = styled.button`
  height: 48px;
  background: papayawhip;
  color: steelblue;
  font-size: 20px;
  border: 3px solid steelblue;
  border-radius: 3px;
`

export default function Registe() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  })

  function onChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      password2: registerData.password2,
    }
    console.log(newUser)
    axios
      .post('/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err =>
        setRegisterData({ ...registerData, errors: err.response.data })
      )
  }

  const { name, email, password, password2, errors } = registerData
  return (
    <React.Fragment>
      <Form noValidate onSubmit={onSubmit}>
        {errors.name && <Validation>{errors.name}</Validation>}

        <Input
          className={classnames('is-valid', { 'is-invalid': errors.name })}
          type="name"
          placeholder="Enter your name"
          name={name}
          name="name"
          onChange={onChange}
        />

        {errors.email && <Validation>{errors.email}</Validation>}

        <Input
          className={classnames('is-valid', { 'is-invalid': errors.email })}
          type="email"
          placeholder="Enter your email"
          email={email}
          name="email"
          onChange={onChange}
        />

        {errors.password && <Validation>{errors.password}</Validation>}

        <Input
          className={classnames({ 'is-invalid': errors.password })}
          type="password"
          placeholder="Enter your password"
          password={password}
          onChange={onChange}
          name="password"
        />

        {errors.password2 && <Validation>{errors.password2}</Validation>}

        <Input
          className={classnames({ 'is-invalid': errors.password })}
          type="password"
          placeholder="Confirm your Password"
          password2={password2}
          onChange={onChange}
          name="password2"
        />

        <Button>Register</Button>
      </Form>
    </React.Fragment>
  )
}
