import styles from './SignUpPage.module.scss'
import { styled } from '@mui/system'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { signUp } from '../../services/firebase'

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePass = (e) => {
    setPassword(e.target.value)
  }

  const onClickSignUp = async (e) => {
    setError('')

    try {
      await signUp(email, password)
      navigate('/chats')
    } catch (err) {
      setError(err.message)
      setEmail('')
      setPassword('')
    }
  }

  const MyButton = styled(Button)({
    textTransform: 'none',
  });

  return (
    <div className={styles.wrap}>
      <TextField className={styles.email} label="Email" value={email} onChange={onChangeEmail} ></TextField>
      <TextField className={styles.email} type="password" label="Password" value={password} onChange={onChangePass} ></TextField>

      <div className={styles.btnWrap}>
        <MyButton variant="contained" className={styles.button} onClick={onClickSignUp}>SignUp</MyButton>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
