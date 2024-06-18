import {useEffect} from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase.ts'

function Logout() {
    useEffect(() => {
        signOut(auth)
    }, []);
    return <></>
}

export default Logout