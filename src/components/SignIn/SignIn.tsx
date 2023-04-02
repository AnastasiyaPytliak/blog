import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/theme";
import styles from "./SignIn.module.css"

export interface ISignIn {
  email: string,
  password: string
}

export const SignIn = () => {
  const [signIn, setSignIn] = useState<ISignIn>({
    email: "nastya.pytliak@gmail.com",
    password: "qwerty123"
  })

  const [value, setValue] = useState<ISignIn>({
    email: "",
    password: ""
  })

  const handleInputChange = (event: any) => {
    const target = event.target
    setValue({
      ...value,
      [target.name]: target.value,
    })
  }

  function handleSubmitButtonClick (event: any) {
    event.preventDefault()
    if (signIn.email === value.email && signIn.password === value.password) {
      navigate('/posts')
      localStorage.setItem('username', 'Nastya Pytliak')
      localStorage.setItem('auth', 'true')
    } else {
      alert('Email and/or password was wrong')
      localStorage.setItem('username', 'Sign In')
      localStorage.setItem('auth', 'false')
    }
  }
  
  const theme = useThemeContext()
  const navigate = useNavigate()

  return (
      <div className={styles.container}>
        <form className={theme.theme === 'light' ? styles.form : styles.formDark} >
          <div className={styles.label}>
            Email
          </div>
          <input className={theme.theme === 'light' ? styles.input : styles.inputDark} type='email' name='email' placeholder='Your email' onChange={handleInputChange} />
          <div className={styles.label}>
            Password
          </div>
          <input className={theme.theme === 'light' ? styles.input : styles.inputDark} type='password' name='password' placeholder='Your password' onChange={handleInputChange} />
          <div className={styles.text}>Forgot password?</div>
          <button type='submit' className={styles.button} onClick={handleSubmitButtonClick}>Sign in</button>
          <div className={styles.signup}>Don't have an account? <span>Sign Up</span></div>
        </form>
      </div>
  )
}
