import Home from "./pages/Home"
import Courses from "./pages/Courses"
import NavBar from "./components/NavBar"
import Disable from "./pages/Disable"
// import Quizzes from "./pages/Quizzes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Video from "./pages/Video"
import Notes from "./pages/Notes"
import { DocumentProvider } from './context/Provider'

function App() {
  return (
    <DocumentProvider>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/disable" element={<Disable />} />
          {/* <Route path="/disable/quizzes" element={<Quizzes />} /> */}
          <Route path="/disable/videos" element={<Video />} />
          <Route path="/disable/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </DocumentProvider>
  )
}

export default App
