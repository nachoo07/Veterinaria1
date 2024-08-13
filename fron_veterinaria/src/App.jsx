import { BrowserRouter } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Navegador from "./componentes/navegador/Navegador"

import Rutas from './rutas/rutas'
import Login from "./pages/login/Login"
import './app.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <div className="app-container">
        <Navegador />
        <main className="main-content">
          <Rutas />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
