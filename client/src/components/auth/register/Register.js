import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 48px 48px 48px 48px 48px;
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

export default function Registe(props) {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  })

  function onChange(e) {
    setRegisterData({ [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name1: registerData.name,
      email1: registerData.email,
      password1: registerData.password,
      password2: registerData.password2,
    }
    console.log(newUser)
    axios
      .post('/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const { name, email, password, password2 } = registerData
  return (
    <React.Fragment>
      <Form onSubmit={onSubmit}>
        <Input
          name="name1"
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={onChange}
        />
        <Input
          name="email1"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={onChange}
        />
        <Input
          name="password1"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
        />
        <Input
          name="password2"
          type="password"
          placeholder="Confirm your Password"
          value={password2}
          onChange={onChange}
        />
        <Button>Register</Button>
      </Form>
    </React.Fragment>
  )
}
