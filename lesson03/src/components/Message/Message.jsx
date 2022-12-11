import styles from './Message.module.scss'
export function Message(props) {

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <div className={styles.autor}>{props.autor}</div>
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}
