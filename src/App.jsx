import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
