import { Container, Col, Row } from 'react-bootstrap'
import styles from './ChatsPage.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AddMessageForm } from '../../components/AddMessageForm/AddMessageForm'
import { MessageList } from '../../components/MessageList/MessageList'
import { addMessageWithThunk } from '../../store/chats/actions'
import { getUserName, getNameVisible } from '../../store/profile/selectors'
import { getChatList } from '../../store/chats/selectors'

export function ChatsPage() {
  const { chatId } = useParams()
  const userName = useSelector(getUserName)
  const visibleName = useSelector(getNameVisible)
  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

  const currentChat = chatList.find(item => item.id == chatId)
  const messages = currentChat.messages

  const onAddMessage = (message) => {
    dispatch(addMessageWithThunk(chatId, message))
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-6 col-md-5 col-lg-4">
          <AddMessageForm className={styles.userForm} userName={userName} visibleName={visibleName}  addMessage={onAddMessage} />
        </Col>
        <Col className="col-12 col-sm-6 col-md-7 col-lg-8 mt-3 mt-sm-0">
          <h1>{currentChat.name}</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-12">
          <MessageList className={styles.mesList} messages={messages} />
        </Col>
      </Row>
    </Container>
  )
}
