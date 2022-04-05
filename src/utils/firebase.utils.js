import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAPPAWNrRDmGWIX2CAoSXgPLQDHA5r2AOI',
  authDomain: 'crwn-clothing-14b94.firebaseapp.com',
  projectId: 'crwn-clothing-14b94',
  storageBucket: 'crwn-clothing-14b94.appspot.com',
  messagingSenderId: '136527317810',
  appId: '1:136527317810:web:eb0b012dbd957bf7caa52b',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users' , userAuth.uid)
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            })
        } catch(error) {
            console.log('error creating user', error);
        }
    }
    return userDocRef
}