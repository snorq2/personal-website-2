import '../styles/styles.css'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
