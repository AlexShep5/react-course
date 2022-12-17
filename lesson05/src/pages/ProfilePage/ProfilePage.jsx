import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeVisible } from '../../store/profile/actions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import styles from './ProfilePage.module.scss'

export function ProfilePage() {
  const name = useSelector((store) => store.name)
  const visible = useSelector((store) => store.visible)
  const [inpName, setInpName] = useState(name)
  const [inpVisible, setInpVisible] = useState(visible)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(changeName(inpName))
    dispatch(changeVisible(inpVisible))
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-8 col-xl-6 col-xxl-5">
          <div className={styles.wrap}>
            {visible && <h1>{ name }</h1>}
            <TextField
              className={styles.name} label="Имя" value={inpName}
              onChange={(e) => setInpName(e.target.value)}
            />
            <FormControlLabel
              className={styles.checkVisible} control={<Checkbox checked={inpVisible}
              onChange={(e) => {
                setInpVisible(e.target.checked)
              }} />} label="Показывать имя"

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
