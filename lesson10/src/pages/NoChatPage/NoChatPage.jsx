import { useEffect } from 'react'
import styles from './NoChatPage.module.scss'
import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import { addChat } from '../../store/chats/actions'
import { useDispatch } from 'react-redux'
import { deleteChat } from '../../store/chats/actions'

export function NoChatPage(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    props.updateDB()
  }, [])

  const onAddChat = (chat) => {
    const existName = props.chats.find(item => item.name == chat.name)

    if (existName) {
      alert('Чат с таким именем уже существует')
    } else {
      const chatsSize = props.chats.length
      if (chatsSize) {
        chat.id = props.chats.reduce((max, item) => {
          if (item.id > max) return item.id
          else return max
        }, 0) + 1
      } else {
        chat.id = 1
      }
      dispatch(addChat(chat))
    }
  }

  const onDeleteChat = (chatId) => {
    const delName = props.chats.find((item) => item.id == chatId).name
    const confDel = window.confirm(`Вы действительно хотите удалить ${delName}`)
    if (confDel) {
      dispatch(deleteChat(delName))
    }
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-6 col-md-6 col-lg-5">
          <h1>Select chat</h1>
          <ChatList className={styles.chatList} chatList={props.chats} deletChat={onDeleteChat}></ChatList>
        </Col>
        <Col className="d-none d-lg-block col-lg-2">
        </Col>
        <Col className="col-12 col-sm-6 col-md-6 col-lg-5 mt-3 mt-sm-0">
          <h1>Add chat</h1>
          <AddChatForm className={styles.userForm} addChat={onAddChat}></AddChatForm>
        </Col>
      </Row>
    </Container>
  )
}
