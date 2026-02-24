import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./shared/components/Header"
import Footer from "./shared/components/Footer"
import Content from "./features/Home/components/content"
import Props from "./features/props/components/Props"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App