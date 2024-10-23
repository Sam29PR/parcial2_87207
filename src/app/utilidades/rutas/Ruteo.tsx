import { Route ,Routes } from "react-router-dom";
import { Acerca } from "../../componets/otros/Quienes";
import { ListarRevistas } from "../../componets/revistas/ListarRevistas";
import { RegistarRevistas } from "../../componets/revistas/RegistrarRevistas";
import { AdminRevistas } from "../../componets/revistas/AdminRevistas";
import { NoEncontrado } from "../../componets/conetenedor/NoEncontrado";
import Inicio from "../../componets/conetenedor/Inicio";

 
export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
 
            <Route path="/lisRevis" element={<ListarRevistas/>}/>
            <Route path="/RegisRevis" element={<RegistarRevistas/>}/>
            <Route path="/AdmRevis" element={<AdminRevistas/>}/>
                   
           
 
            <Route path="/acer" element={<Acerca/>}/>
 
            <Route path="*" element={<NoEncontrado/>}/>
 
        </Routes>
    );
};
 