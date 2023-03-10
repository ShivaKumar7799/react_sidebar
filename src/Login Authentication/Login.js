import { SettingsApplications } from '@mui/icons-material';
import React from 'react'
import {useState,useEffect, useRef, useContext} from 'react'
import { AuthContext } from './Context/AuthProvider';
import axios from './api/axios'

const LOGIN_URL ='/auth'
function Login() {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState("");
  const [errMessage, setErrorMessage] = useState("sfd");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus()
  },[]);
  useEffect(() => {
    setErrorMessage("");
  },[user, password])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      const response = await axios.post(LOGIN_URL, JSON.stringify({user, password}, {
        headers : { 'content-Type' : 'application.json'},
        withCredentials : true
      }))
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({user, password, roles, accessToken})
      setUser("");
      setPassword("")
      setSuccess(true)
    }
    catch(err){
      console.log(err,"error message")
      if(!err?.respons){
        setErrorMessage("No server Response")
      } else if(err.response?.status === 400){
        setErrorMessage("Missing username or password")
      } else if(err.respons?.status === 401){
        setErrorMessage("unauthorised")
      } else {
        setErrorMessage("Login Failed")
      }
      errRef.current.focus();
    }
    setSuccess(true)
  }
  return (
    <>
      {success ? 
      <>
        <h2> You are logged in</h2>
        <p>
          <a href="/home">
            Go to Home
          </a>
        </p>
      </> : 
      <div>
      <p ref={errRef} className = {errMessage? "errMsg" : "offScreen"} >{errMessage}</p>
      <h1> Sign In</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor='username' >UserName :</label>
        <input 
          type='text' 
          name = "username" 
          id="username" 
          ref={userRef}
          autoComplete = "off"
          onChange = {((event) => setUser(event.target.value))}
          value = {user}
        />
        <br />
        <label htmlFor='password' >Password :</label>
        <input 
          type='password' 
          name = "password" 
          id="password" 
          ref={userRef}
          onChange = {((event) => setPassword(event.target.value))}
          value = {password}
          required
        />
        <br />
        <button  > Sign In</button>
      </form>
      <p>
        Need an Account? <br />
        <span className='line' >
          <a href="/signUp">Sign Up</a>
        </span>
      </p>
    </div>
    }
    </>
  )
}

export default Login