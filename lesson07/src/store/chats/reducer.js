import * as types from './types'
const initialState = {
  chatList: [
    {
      id: 1,
      name: "Chat1",
      messages: [{ text: "Welcome to Chat1!", author: 'chatbot' }],
    },
    {
      id: 2,
      name: "Chat2",
      messages: [{ text: "Welcome to Chat2!", author: 'chatbot' }],
    },
    {
      id: 3,
      name: "Chat3",
      messages: [{ text: "Welcome to Chat3!", author: 'chatbot' }],
    },
  ]
}

export const chatsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          payload
        ]
      }

    case types.DELETE_CHAT:
      const delIndex = state.chatList.findIndex((item) => item.id == payload.id)
      state.chatList.splice(delIndex, 1)
      return {
        ...state,
        chatList: [
          ...state.chatList
        ]
      }

    case types.ADD_MESSAGE:
      state.chatList.find(item => item.id == payload.chatId).messages.push(payload.message)
      return {
        ...state,
        chatList: [
          ...state.chatList
        ]
      }

    default:
      return state
  }
}
