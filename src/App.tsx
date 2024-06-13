import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import {Layout, Home, Login} from "./pages"

function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
