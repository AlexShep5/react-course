import styles from './SignInPage.module.scss'
import { useState } from 'react'
import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { signIn } from '../../services/firebase'
import { useNavigate } from 'react-router-dom'

export const SignInPage = () => {
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
      await signIn(email, password)
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
        <MyButton variant="contained" className={styles.button} onClick={onClickSignUp}>SignIn</MyButton>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
