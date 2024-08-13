import React from 'react'
import './stylefooter.css'
import logoveterinaria from "../../assets/footericono/logovetinaria.png"

const Footer = () => {
  return (
    <>
    
    <footer className="footer">
      
      <div className="column-seccion">
        <h3>Secciones</h3>
        <ul className='lista-vinetas'>
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Servicios</li>
        </ul>
      </div>
      <div className="column">
        <h3>Direccion:</h3>
        <ul className='lista-vinetas'>
          <li>Bernardino Rivadavia 1050, San Miguel de Tucumán, Tucumán</li>
          <hr />
          <h3>Horarios:</h3>
          <li>Lunes a sabados de 9 a 18hrs.</li>
        </ul>
      </div>
      <div className="column-logo">
        <img
                className="logo-footer"
                src={logoveterinaria}
                alt="logoRollingMarket"
              />
      </div>
      
      
    </footer>
    
    </>
  )
}

export default Footer