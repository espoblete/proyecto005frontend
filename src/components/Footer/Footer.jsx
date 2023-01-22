import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";



const footer = () => {
  return (
<footer>
  <div class="card text-center">
   <div class="card-header">
    ¡CONTÁCTANOS!
  </div>
  <div class="card-body">
   <h5 class="card-title">Redes Sociales</h5>
    <p class="card-text"><FaFacebook/> <FaInstagram/> <FaTelegramPlane/> <FaTwitter/> <FaWhatsapp/> </p>
  </div>
  <div class="card-footer text-muted">
    Desarrollado por José Cerna & Esteban Poblete
  </div>
 </div>
</footer>
  )
}

export default footer



