import styles from './AddChatForm.module.scss'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export function AddChatForm(props) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const clickHandler = () => {
        const regExp = /^\s*$/
        if (regExp.test(name)) {
            alert('Укажите имя чата')
            return
        } else if (regExp.test(message)) {
            alert('Введите текст начального сообщения')
            return
        }

        props.addChat({ id: 0, name: name, messages: [{ author: 'chatbot', text: message }] })

        setName('')
        setMessage('')
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeMessage = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <TextField className={styles.name} label="Имя чата" value={name} onChange={changeName} ></TextField>
            <TextField className={styles.message} multiline rows={4} label="Начальное сообщение" value={message} onChange={changeMessage}></TextField>

            <div className={styles.btnWrap}>
                <Button variant="contained" className={styles.button} onClick={clickHandler}>Добавить</Button>
            </div>
        </div>
    )
}
