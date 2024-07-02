import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import {
    Layout, Home, Login, Profile,
    Store, Operations, Price, Clients,
    Providers, Sell, Supply, Logout,
    EditClient, AddClient
} from "./pages"

function App() {
  return (
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
                        <Route path="/clients/new/" element={<AddClient/>}/>
                        <Route path="/clients/edit/:cid" element={<EditClient/>}/>
                        <Route path="/providers" element={<Providers/>}/>
                        <Route path="/sell" element={<Sell/>}/>
                        <Route path="/supply" element={<Supply/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
  )
}

export default App
