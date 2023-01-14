import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import styles from './LoadingError.module.scss'

const MyButton = styled(Button)({
  backgroundColor: '#9fa8da',
  '&:hover': {
    backgroundColor: '#9fa8da',
  },
  color: 'white'
});

export function LoadingError(props) {
  return (
    <div className={`${styles.wrap} ${props.className}`} >
      <h3>{props.caption}</h3>
      <MyButton className={styles.repeatBtn} variant="contained" onClick={props.request}>Повторить</MyButton>
    </div>
  )
}
