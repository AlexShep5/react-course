import styles from './Message.module.scss'

export function Message(props) {

    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>
        </>
    )
}
