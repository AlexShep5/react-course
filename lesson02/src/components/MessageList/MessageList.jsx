import styles from './MessageList.module.scss'
import { Message } from '../Message/Message'

export function MessageList(props) {

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <Message className={styles.title} autor='Имя' text='Сообщение' />
            {props.list.map((item, index) => <Message key={index} autor={item.autor} text={item.text} />)}
        </div>
    )
}
