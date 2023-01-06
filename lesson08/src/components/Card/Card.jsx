import styles from './Card.module.scss'
export function Card(props) {

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <h2 className={styles.title}>Cat-Fact {props.idx + 1}</h2>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.created}>Created: {props.created}</div>
            <div className={styles.updated}>Updated: {props.updated}</div>
        </div>
    )
}
