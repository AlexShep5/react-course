import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'

const config = {
    apiKey: "AIzaSyBfQmmLOADmoC_29WRtn1yTfspRe67mWfQ",
    authDomain: "messager-aee54.firebaseapp.com",
    databaseURL: "https://messager-aee54-default-rtdb.firebaseio.com",
    projectId: "messager-aee54",
    storageBucket: "messager-aee54.appspot.com",
    messagingSenderId: "860327539889",
    appId: "1:860327539889:web:de067b2af7e5c67dd71e90"
}

const app = initializeApp(config)

export const auth = getAuth(app)

export const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

export const logOut = async () => await signOut(auth)

export const db =getDatabase(app)
export const dbRef = ref(db)
export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')

export const getChatById = (chatId) => ref(dbRef, `chats/${chatId}`)
