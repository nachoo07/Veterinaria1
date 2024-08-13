
import { Routes, Route } from 'react-router-dom'
import SobreNosotros from '../componentes/sobreNosotros/SobreNosotros'
import Home from '../pages/home/Home'
import Productos from '../pages/producto/Productos'
import Internaciones from '../pages/internacion/Internaciones'
import Mascotas from '../pages/mascotas/mascotas'
import FormularioMascotas from '../pages/mascotas/formularioMascotas'
import VerCliente from '../pages/clientes/VerCliente'
import AgregarCliente from '../pages/clientes/AgregarCliente'
import EditarCliente from '../pages/clientes/EditarCliente'
import Ver from '../pages/clientes/Ver'
import Login from '../pages/login/Login'
import Servicios from '../pages/servicios/Servicios'
import Sistema from '../pages/sistema/Sistema'
import VerHistorial from '../pages/historialMed/Verhistorial'
import MainAgregarHist from '../componentes/historialMed/MainAgregarHist'
import MainEditarHist from '../componentes/historialMed/MainEditarHist'
import Usuarios from '../pages/usuarios/usuarios'
import FormularioUsuarios from '../pages/usuarios/formularioUsuarios'

const rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/inicio' element={<Home />} />
        <Route path='/sobreNosotros' element={<SobreNosotros />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/sistema' element={<Sistema />} />
        <Route path='/internaciones' element={<Internaciones />} />
        <Route path="/mascotas" element={<Mascotas />} />

        <Route path="/mascotas/formulario" element={<FormularioMascotas />} />
        <Route path="/mascotas/formulario/:id_mascota" element={<FormularioMascotas />} />

        <Route path='/' element={<Login />} />

        <Route path='/clientes' element={<VerCliente />} />
        <Route path='/clientes/agregar' element={<AgregarCliente />} />
        <Route path='/clientes/editar/:id' element={<EditarCliente />} />
        <Route path='/clientes/ver/:id' element={<Ver />} />

        <Route path="/login" element={<Login />} />
        <Route path='/historial_med' element={<VerHistorial />} />
        <Route path='/historial_med/agregar' element={<MainAgregarHist />} />
        <Route path='/historial_med/editar/:id' element={<MainEditarHist />} />
        <Route path='/historial_med/ver/:id' element={<VerHistorial />} />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/formulario" element={<FormularioUsuarios />} />
        <Route path="/usuarios/formulario/:id_usuario" element={<FormularioUsuarios />} />

      </Routes>


    </>
  )
}

export default rutas