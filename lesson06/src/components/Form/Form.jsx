import styles from './Form.module.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { addMessage } from '../../store/chats/actions'
import { useParams } from 'react-router-dom'
import { getUserName, getNameVisible } from '../../store/profile/selectors'

export function Form(props) {
    const { chatId } = useParams()
    const userName = useSelector(getUserName)
    const visibleName = useSelector(getNameVisible)
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addHandler = () => {
        const regExp = /^\s*$/
        if (regExp.test(text)) {
            alert('Cообщение должно содержать текст')
            return
        }

        dispatch(addMessage(chatId, { author: userName, text: text }))
        setText('')
    }

    const changeText = (event) => {
        setText(event.target.value)
    }

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            {visibleName && <h1>{userName}</h1>}
            <TextField className={styles.text} multiline rows={4} label="Сообщение" value={text}  autoFocus onChange={changeText}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={addHandler}>Отправить</Button>
            </div>
        </div>
    )
}
