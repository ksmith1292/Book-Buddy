import { useState } from "react"

const Login = () =>{

const [loginEmailInput, setLoginEmailInput] =useState('')
const [loginPasswordInput, setPasswordInput] =useState('')
const [token, setToken] = useState('')

const loggingIn = async (event) =>{
  event.preventDefault();

  try{
    const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
      method: 'POST',
      headers: {"Content-Type": "application/json"
      },
      body: JSON.stringify({
        email:loginEmailInput,
        password:loginPasswordInput
      })
    });
    const tokenObj = await response.json()
    setToken(tokenObj.token)
    console.log(tokenObj)
  } catch(err) {
    console.log(err)
  }

}

  return (
    <>
    <h1>LOGIN</h1>
    <form onSubmit={loggingIn}>
      <input placeholder="email"
      onChange={(event)=>{setLoginEmailInput(event.target.value)}}/>

      <input placeholder="password"
      onChange={(event)=>{setPasswordInput(event.target.value)}}/>
     
      <button>Submit</button>

    </form>
    </>
    
  )
}

export default Login