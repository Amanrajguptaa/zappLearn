import Home from "./pages/Home"
import Courses from "./pages/Courses"
import NavBar from "./components/NavBar"
import { BrowserRouter,Route,Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
