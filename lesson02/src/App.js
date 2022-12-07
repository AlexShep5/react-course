import { useState, useEffect } from 'react'
import { MessageList } from './components/MessageList/MessageList'
import { Form } from './components/Form/Form'

export function App() {
    const [messageList, setMessageList] = useState([])

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
    });

    const addMessage = (message) => {
        setMessageList([...messageList, message])
    }

    return (
        <div className="container">
            <div className="mainWrap">
                <Form className="userForm" addMes={addMessage} />
                <MessageList className="mesList" list={messageList} />
            </div>
        </div>
    )
}
