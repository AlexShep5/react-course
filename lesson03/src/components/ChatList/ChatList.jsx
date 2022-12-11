import styles from './ChatList.module.scss'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export function ChatList(props) {

    return (
        <div className={`${styles.wrap} ${props.className}`}>
            <List>
                <div className={styles.title}>Чаты</div>
                {props.list.map((item, index) =>
                <ListItem key={index}>
                    <div className={styles.item}>{item.name}</div>
                </ListItem>
                )}
            </List>
        </div>
    )
}
