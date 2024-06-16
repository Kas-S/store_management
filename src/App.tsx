import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import {onAuthStateChanged} from "firebase/auth"
import {Layout, Home, Login} from "./pages"
import {auth} from "./firebase.ts"
import {UserContext} from "./UserContext.ts"
import {User} from "firebase/auth"

function App() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
      onAuthStateChanged(auth, (u) => {
          setUser(u)
      })
  }, [])
  return (
    <UserContext.Provider value={user}>
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route index element={<Home/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </UserContext.Provider>
  )
}

export default App
