import React, { useState, useEffect } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import "./Admin.css"
import iltplogo from "../../assets/iltp-logo.png"
import { useNavigate } from "react-router-dom"
import { app } from "../../firebase/firebase-config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const AdminLogin = ({ setUser, user, setPassword, password }) => {
  const [loginLoading, setLoginLoading] = useState(false)
  // useNavigate
  let navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")
    if (authToken) {
      navigate("/admin/news")
    } else {
      navigate("/admin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // admin login handler
  const handleLogin = (e) => {
    e.preventDefault()
    setLoginLoading(true)
    const authentication = getAuth(app)
    signInWithEmailAndPassword(authentication, user, password)
      .then((response) => {
        setLoginLoading(false)
        navigate("/admin/news")
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        )
        setUser("")
        setPassword("")
      })
      .catch((err) => {
        const errorMessage = err.message
        console.log(errorMessage)
        alert("Incorrect username/password")
        setLoginLoading(false)
      })
  }
  return (
    <div className="bg-dark">
      <div className="Admin col-10 col-sm-8 col-lg-6 col-xl-4">
        <Form onSubmit={handleLogin} className="col-lg-12 bg-light border p-5">
          <div className="col-4 mx-auto mb-3">
            <img className="w-100" src={iltplogo} alt="iltp logo" />
          </div>
          <h2 className="text-center mb-3">Administrator Login </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              onChange={(e) => setUser(e.target.value)}
              value={user}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter password"
            />
            <Form.Text className="text-muted">
              We'll never share your account with anyone else.
            </Form.Text>
          </Form.Group>
          <Button disabled={loginLoading} variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
        <Alert key="warning" variant="warning mt-4 mb-0 text-center" size="sm">
          Access ONLY to authorized users
        </Alert>
      </div>
    </div>
  )
}

export default AdminLogin
