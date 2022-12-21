import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from '../../components/ChatList/ChatList'
import { AddChatForm } from '../../components/AddChatForm/AddChatForm'
import styles from './NoChatPage.module.scss'

export function NoChatPage() {

  return (
    <Container>
      <Row className="mt-4">
        <Col className="col-12 col-sm-6 col-md-6 col-lg-5">
          <h1>Select chat</h1>
          <ChatList className={styles.chatList}></ChatList>
        </Col>
        <Col className="d-none d-lg-block col-lg-2">
        </Col>
        <Col className="col-12 col-sm-6 col-md-6 col-lg-5 mt-3 mt-sm-0">
          <h1>Add chat</h1>
          <AddChatForm className={styles.userForm}></AddChatForm>
        </Col>
      </Row>
    </Container>
  )
}
