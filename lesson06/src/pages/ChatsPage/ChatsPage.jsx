import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import styles from './ChatsPage.module.scss'
import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'
import { getChatList } from '../../store/chats/selectors'

export function ChatsPage() {
  const { chatId } = useParams();
  const chatList = useSelector(getChatList)
  const currentChat = chatList.find(item => item.id == chatId)

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-6 col-md-5 col-lg-4">
          <Form className={styles.userForm} />
        </Col>
        <Col className="col-12 col-sm-6 col-md-7 col-lg-8 mt-3 mt-sm-0">
          <h1>{currentChat.name}</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-12">
          <MessageList className={styles.mesList} />
        </Col>
      </Row>
    </Container>
  )
}
