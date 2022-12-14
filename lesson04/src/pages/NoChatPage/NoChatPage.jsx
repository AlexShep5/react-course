import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import styles from './NoChatPage.module.scss'

export function NoChatPage(props) {

  const addChat = (chat) => {
    const existName = props.chats.find(item => item.name == chat.name)

    if (existName) {
      alert('Чат с таким именем уже существует')
    } else {
      const chatsSize = props.chats.length
      if (chatsSize) {
        chat.id = props.chats[chatsSize - 1].id + 1
      } else {
        chat.id = 1
      }

      const newChats = props.chats
      newChats.push(chat)
      props.setChats(Object.assign([], newChats))
    }
  }

  const delChat = (chatId) => {
    const newChats = props.chats
    const delIndex = newChats.findIndex((item) => item.id == chatId)
    const confDel = window.confirm(`Вы действительно хотите удалить ${newChats[delIndex].name}`)
    if (!confDel) {
      return
    } else {
      newChats.splice(delIndex, 1)
      props.setChats(Object.assign([], newChats))
    }

  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-6 col-md-6 col-lg-5">
          <h1>Select chat</h1>
          <ChatList className={styles.chatList} chats={props.chats} delChat={delChat}></ChatList>
        </Col>
        <Col className="d-none d-lg-block col-lg-2">
        </Col>
        <Col className="col-12 col-sm-6 col-md-6 col-lg-5 mt-3 mt-sm-0">
          <h1>Add chat</h1>
          <AddChatForm className={styles.userForm} addChat={addChat}></AddChatForm>
        </Col>
      </Row>
    </Container>
  )
}
