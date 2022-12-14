import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import styles from './ChatsPage.module.scss'
import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'

export function ChatsPage(props) {
  const { chatId } = useParams();


  function getChatById(chats, chatId) {
    return chats.find(item => item.id == chatId)
  }

  const currentChat = getChatById(props.chats, chatId)
  const messages = currentChat.messages

  useEffect(() => {
    if (props.chats.length) {
      const mesSize = currentChat.messages.length
      const lastName = currentChat.messages[mesSize - 1].author

      if (lastName != 'chatbot') {
        const timerId = setTimeout(() => {
          addMessage({ author: 'chatbot', text: `Спасибо за сообщение, ${lastName}!` })
        }, 1500)

        return () => {
          clearTimeout(timerId);
        }
      }
    }
  }, [props.chats]);

  const addMessage = (message) => {
    const newChats = props.chats
    getChatById(newChats, chatId).messages.push(message)
    props.setChats(Object.assign([], newChats))
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-6 col-md-5 col-lg-4">
          <Form className={styles.userForm} addMes={addMessage} />
        </Col>
        <Col className="col-12 col-sm-6 col-md-7 col-lg-8 mt-3 mt-sm-0">
          <h1>{currentChat.name}</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-12">
          <MessageList className={styles.mesList} list={messages} />
        </Col>
      </Row>
    </Container>
  )
}
