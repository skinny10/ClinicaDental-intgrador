 import Header from "../molecules/Header"
 import Section1 from "../organims/Section1"
 import Instalaciones from "../organims/Instalaciones"
 import Section3 from "../organims/Section3"
import Servicios from "../organims/Servicios"
import SolicitarCita from "../organims/SolicitarCita" 
import Footer from "../molecules/Footer"

function InicioUsuarios(){
    return(
        <> 
        <div>
        <Header />
      <Section1/>
      <Instalaciones/>
      <Section3/>               
      <Servicios/>                       
      <Footer/>
        </div>
       
      </>
    )
 }

 export default InicioUsuarios;