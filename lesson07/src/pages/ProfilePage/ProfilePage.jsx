import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeVisible } from '../../store/profile/actions'
import { getUserName, getNameVisible } from '../../store/profile/selectors'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import styles from './ProfilePage.module.scss'

export function ProfilePage() {
  const name = useSelector(getUserName)
  const visible = useSelector(getNameVisible)
  const [inpName, setInpName] = useState('')
  const [inpVisible, setInpVisible] = useState(visible)
  const dispatch = useDispatch()

  const handleChange = () => {
    if (inpName) {
      dispatch(changeName(inpName))
      setInpName('')
    }
    dispatch(changeVisible(inpVisible))
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-8 col-xl-6 col-xxl-5">
          <div className={styles.wrap}>
            <h1>{ name }</h1>
            <TextField
              className={styles.name} label="Имя пользователя" value={inpName}
              onChange={(e) => setInpName(e.target.value)}
            />
            <FormControlLabel
              className={styles.checkVisible} control={<Checkbox checked={inpVisible}
              onChange={(e) => {
                setInpVisible(e.target.checked)
              }} />} label="Показывать имя на странице чата"
            />
            <div className={styles.btnWrap}>
              <Button
                className={styles.button} variant="contained"
                onClick={handleChange}
              >Применить</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
