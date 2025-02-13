import { useState } from "react"

const Register = () => {

  const [firstNameInput, setFirstNameInput] = useState('')
  const [lastNameInput, setLastNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const createUser = async(event) => {
    event.preventDefault()
    try{
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: 'POST',
      headers: {"Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName:firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        password: passwordInput
      })
    });

  const user = await response.json()
    if(user.user) {
      console.log('yay', user)
      setFirstNameInput('');
      setLastNameInput('');
      setEmailInput('');
      setPasswordInput('')
    } else {
      console.log('uh oh', user)
    }
  } catch(err){
    
  }
  }

  return (
    <>
      <h1> REGISTER </h1>
      <form onSubmit={createUser}>
        <input placeholder="first name"
          onChange={(event) => { setFirstNameInput(event.target.value) }}
          value={firstNameInput}
        />
        <input placeholder="last name"
          onChange={(event) => { setLastNameInput(event.target.value) }}
          value={lastNameInput}
        />
        <input placeholder="email"
          type="email"
          onChange={(event) => { setEmailInput(event.target.value) }}
          value={emailInput}
        />
        <input placeholder="password"
          type="password"
          onChange={(event) => { setPasswordInput(event.target.value) }}
          value={passwordInput}
        />
        <button>Submit</button>
        {console.log()}
      </form>

    </>

  )
}
export default Register

