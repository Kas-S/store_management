import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import {onAuthStateChanged} from "firebase/auth"
import {Layout, Home, Login, Profile, Store, Operations, Price, Clients, Providers, Sell, Supply, Logout} from "./pages"
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
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/store" element={<Store/>}/>
                        <Route path="/history" element={<Operations/>}/>
                        <Route path="/price" element={<Price/>}/>
                        <Route path="/clients" element={<Clients/>}/>
                        <Route path="/providers" element={<Providers/>}/>
                        <Route path="/sell" element={<Sell/>}/>
                        <Route path="/supply" element={<Supply/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </UserContext.Provider>
  )
}

export default App
