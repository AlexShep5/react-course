import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NoChatPage } from './pages/NoChatPage/NoChatPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { GistsPage } from './pages/GistsPage/GistsPage'
import { SignInPage } from './pages/SignInPage/SignInPage'
import { SignUpPage } from './pages/SignUpPage/SignUpPage'
import { Page404 } from './pages/Page404/Page404'
import { Header } from './components/Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { changeAuth } from './store/profile/actions'
import { updateChats } from './store/chats/actions'
import { getAuth } from './store/profile/selectors'
import { getChatList } from './store/chats/selectors'
import { PublicRoute } from './hocs/PublicRoute'
import { PrivateRoute } from './hocs/PrivateRoute'
import { auth, chatsRef } from './services/firebase'
import { onValue } from 'firebase/database'
import { objToArray } from './utils/utils'

export function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(getAuth)
  const chatList = useSelector(getChatList)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true))
      } else {
        dispatch(changeAuth(false))
      }
    })
  }, [])

  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val()
      const dataArray = objToArray(data)
      dispatch(updateChats(dataArray))
    } )
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route auth={isAuth} path='/' element={<HomePage />} />
          <Route path='/chats' element={<PrivateRoute auth={isAuth} comp={<NoChatPage chats={chatList} />} />} />
          <Route path='/chats/:chatId' element={<PrivateRoute auth={isAuth} comp={<ChatsPage chats={chatList} />} />} />
          <Route path='/profile' element={<PrivateRoute auth={isAuth} comp={<ProfilePage />} />} />
          <Route path='/gists' element={<GistsPage />} />
          <Route path='/signin' element={<PublicRoute auth={isAuth} comp={<SignInPage />} />} />
          <Route path='/signup' element={<PublicRoute auth={isAuth} comp={<SignUpPage />} />} />
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </main>
    </>
  )
}
