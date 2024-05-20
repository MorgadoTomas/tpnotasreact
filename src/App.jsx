import { Component } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Envio from './componentes/Envio';
export default class App extends Component{



render(){
    return(
        <div className='Contenedor'>
             <div className='Contenedordecomponenteenvio'>

                 <Envio
                    ejemplo={()=>{}}
                 />
             </div>
            <Formulario 
            
            />
        </div>

)
}
}