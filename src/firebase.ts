import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcla2cuBh8msYOHsJyxx91Gl75J4K3Bv4",
    authDomain: "store-management-8f2ee.firebaseapp.com",
    projectId: "store-management-8f2ee",
    storageBucket: "store-management-8f2ee.appspot.com",
    messagingSenderId: "929965648379",
    appId: "1:929965648379:web:b8f04728b5da750d13035e",
    measurementId: "G-2VJGYYYW6N"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app),
      db = getFirestore(app)

export { auth, db }