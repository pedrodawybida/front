import {ChakraProvider, theme,} from "@chakra-ui/react"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import Desenvolvedores from "./pages/Desenvolvedores"
import Login from "./pages/Login"
import CreateAnimal from "./pages/animais/CreateAnimal"
import RegistroUsuario from "./pages/RegistroUsuario"
import Registered from "./pages/Registered"
import './styles/style.css';



export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/about" element={<Desenvolvedores/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegistroUsuario/>}/>
        <Route path="/registered" element={<Registered/>}/>
        <Route path= "*" element={<div>Not Found</div>}/>
      </Routes>
    </BrowserRouter>


  </ChakraProvider>
)
