import React from 'react'
import styled from 'styled-components'
import logo from '../../images/devhamburglogo.png'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

const Nav = styled.nav`
  display: grid;
  grid-template-rows: 58px;
  grid-template-columns: 68px 1fr;
  grid-auto-flow: column;
  grid-gap: 2px;
  background: steelblue;
  margin-bottom: 2px;
`

const Image = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  width: 48px;
  padding-left: 10px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding-right: 10px;
`

const Button = styled.button`
  border-radius: 15px;
  font-size: 14px;

  &.sign-up {
    background: steelblue;
    border: 2px solid papayawhip;
    color: white;
  }
  &.login {
    background: papayawhip;
    color: steelblue;
    border: 2px solid papayawhip;
  }
`

export default function Navbar() {
  return (
    <Router>
      <Nav>
        <StyledLink exact to="/">
          <Image src={logo} alt={logo} />
        </StyledLink>
        <StyledLink to="/register">
          <Button className="sign-up">Sign Up</Button>
        </StyledLink>
        <StyledLink to="/login">
          <Button className="login">Login</Button>
        </StyledLink>
      </Nav>
    </Router>
  )
}
