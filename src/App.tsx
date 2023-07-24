import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            {/* <About></About> */}
            <Footer></Footer>
        </>
    )
}

export default App
