import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { NoChatPage } from '..//NoChatPage'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'


describe('testing ChatsPage', () => {
  const chatList = [
    {
      id: 1,
      name: 'Chat1',
      messages: [{
        text: 'text',
        author: 'author'
      },
      {
        text: 'text',
        author: 'author'
      }]
    },
    {
      id: 2,
      name: 'Chat2',
      messages: [{
        text: 'text',
        author: 'author'
      }]
    }
  ]

  const mockHandler = jest.fn()

  it('render component App', () => {
    render(
      <Provider store={store}>
        <NoChatPage updateDB={() => null}></NoChatPage>
      </Provider>
    )
  })

  it('render with snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <NoChatPage updateDB={() => null}></NoChatPage>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('render Chat1', () => {
    render(
      <Provider store={store}>
        <Router>
        <NoChatPage chats={chatList} updateDB={() => null}></NoChatPage>
        </Router>
      </Provider>
    )
    expect(screen.getByText('Chat1')).toBeInTheDocument()
  })

  it('render Chat2', () => {
    render(
      <Provider store={store}>
        <Router>
        <NoChatPage chats={chatList} updateDB={() => null}></NoChatPage>
        </Router>
      </Provider>
    )
    expect(screen.getByText('Chat2')).toBeInTheDocument()
  })

})
