import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import { MessageList } from './components/MessageList/MessageList'
import { Form } from './components/Form/Form'
import { Container, Col, Row } from 'react-bootstrap'
import { ChatList } from './components/ChatList/ChatList'



export function App() {
    const [messageList, setMessageList] = useState([])
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        const sizeList = messageList.length
        if (sizeList) {
            const lastName = messageList[sizeList - 1].autor
            if (lastName != 'chatbot') {
                setTimeout(() => {
                    addMessage({autor: 'chatbot', text: `Спасибо за сообщение, ${lastName}!`})
                }, 1500)
            }
        }
    }, [messageList]);

    useEffect(() => {
        const initList = [
            {id: 1, name: 'chat1'},
            {id: 2, name: 'chat2'},
            {id: 3, name: 'chat3'}
        ]
        setChatList([...initList])
    }, [])



    const addMessage = (message) => {
        setMessageList([...messageList, message])
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col className="col-12 col-sm-5 col-md-4 col-lg-3">
                    <Form className={styles.userForm} addMes={addMessage} />
                </Col>
                <Col className="col-12 col-sm-7 col-md-8 col-lg-9 mt-3 mt-sm-0">
                    <ChatList className={styles.chatList} list={chatList}></ChatList>
                </Col>
            </Row>
            <Row className="mt-4">
            <Col className="col-12">
                <MessageList className={styles.mesList} list={messageList} />
            </Col>
            </Row>
        </Container>
    )
}
