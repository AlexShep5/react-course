import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NoChatPage } from './pages/NoChatPage/NoChatPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Page404 } from './pages/Page404/Page404'
import { Header } from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {

  return (
    <>
    <Provider store={store}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/chats' element={<NoChatPage />}></Route>
          <Route path='/chats/:chatId' element={<ChatsPage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </main>
      </Provider>
    </>
  )
}
