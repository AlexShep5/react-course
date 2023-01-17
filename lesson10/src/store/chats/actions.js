import * as types from './types'
import { push, set, remove, child, ref } from 'firebase/database'
import { db, dbRef } from '../../services/firebase'

export const addChat = (chat) => async () => {
  set(child(dbRef, `chats/${chat.name}`), {
    id: chat.id,
    name: chat.name
  })

  push(child(dbRef, `chats/${chat.name}/messages`), chat.messages[0])
}

export const deleteChat = (chatName) => async () => {
  set(ref(db, `chats/${chatName}`), null)
}

export const addMessage = (chatName, message) => async () => {
  push(child(dbRef, `chats/${chatName}/messages`), message)

  if (message.author != 'chatbot') {
    setTimeout(() => {
      push(child(dbRef, `chats/${chatName}/messages`), { author: 'chatbot', text: `Спасибо за сообщение, ${message.author}!` })
    }, 1500)
  }
}

export const updateChats = (chats) => {
  return {
    type: types.UPDATE_CHATS,
    payload: chats
  }
}

// export const addChat = (chat) => {
//   return {
//     type: types.ADD_CHAT,
//     payload: chat
//   }
// }

// export const deleteChat = (chatId) => {
//   return {
//     type: types.DELETE_CHAT,
//     payload: chatId
//   }
// }

// export const addMessageWithThunk = (chatId, message) => (dispatch) => {

//   dispatch(addMessage(chatId, message))

//   if (message.author != 'chatbot') {
//     setTimeout(() => {
//       dispatch(addMessage(chatId, { author: 'chatbot', text: `Спасибо за сообщение, ${message.author}!` }))
//     }, 1500)
//   }
// }
