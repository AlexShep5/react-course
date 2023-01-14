import styles from './AddMessageForm.module.scss'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export function AddMessageForm(props) {
    const [text, setText] = useState('')

    const clickHandler = () => {
        const regExp = /^\s*$/
        if (regExp.test(text)) {
            alert('Cообщение должно содержать текст')
            return
        }

        props.addMessage({ author: props.userName, text: text })
        setText('')
    }

    const changeText = (event) => {
        setText(event.target.value)
    }

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            {props.visibleName && <h1>{props.userName}</h1>}
            <TextField className={styles.text} multiline rows={4} label="Сообщение" value={text}  autoFocus onChange={changeText}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={clickHandler}>Отправить</Button>
            </div>
        </div>
    )
}
