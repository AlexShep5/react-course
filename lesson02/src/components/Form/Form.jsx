import styles from './Form.module.scss'
import { useState } from 'react'

export function Form(props) {
    const [autor, setAutor] = useState('')
    const [text, setText] = useState('')

    const addMessage = () => {
        const regExp = /^\s*$/
        if (regExp.test(autor)) {
            alert('Укажите имя автора сообщения')
            return
        } else if (regExp.test(text)) {
            alert('Cообщение должно содержать текст')
            return
        }

        props.addMes({autor: autor, text: text})
    }

    const changeAutor = (event) => {
        setAutor(event.target.value)
    }

    const changeText = (event) => {
        setText(event.target.value)
    }

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <div className={styles.autor}>
                Имя
                <input value={autor} onChange={changeAutor}>{props.autor}</input>
            </div>
            <div className={styles.text}>
                Сообщение
                <textarea rows={5} value={text} onChange={changeText}></textarea>
            </div>
            <div className={styles.btnWrap}>
                <button className={styles.button} onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}
