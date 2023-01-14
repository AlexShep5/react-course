import styles from './Header.module.scss'
import { NavLink, useNavigate } from "react-router-dom"
import exitImg from './img/exit.svg'
import { logOut } from '../../services/firebase'
import { useSelector } from 'react-redux'
import { getAuth } from '../../store/profile/selectors'

const links = [
  {
    id: 1,
    name: 'Home',
    to: '/'
  },
  {
    id: 2,
    name: 'Chats',
    to: '/chats'
  },
  {
    id: 3,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 4,
    name: 'Cat-Fact',
    to: '/gists'
  },
  {
    id: 5,
    name: 'SignIn',
    to: '/signin'
  },
  {
    id: 6,
    name: 'SignUp',
    to: '/signup'
  }
]

export function Header(props) {
  const navigate = useNavigate()
  const isAuth = useSelector(getAuth)

  const onClickExit = async () => {
    try {
      await logOut()
       navigate('/')
    } catch (err) {
      console.warn(err.message)
    }
  }

  return (
    <header>
      <nav>
        <ul className={`${styles.wrap} ${props.className}`}>
          {links.map((item) => (
            <li key={item.id}>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'green' : '#9fa8da'
              })}
                className={`${styles.link}`} to={item.to}>{item.name}</NavLink>
            </li>
          ))}
          {isAuth && <img className={styles.exitImg} src={exitImg} alt="exit" onClick={onClickExit} />}
        </ul>
      </nav>
    </header>
  )
}
