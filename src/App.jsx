import { Component } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Envio from './componentes/Envio';
import Recepcion from './componentes/Recepcion';
export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            materias: [],
            promedio: 0
        }
    }
     calcularpromedio(notas){
        this.state.materias.reduce(materia) , ((acumulador, notas)=>
         acumulador + notas,
         0
    )
        
     }
     guardar(materia, nota){
        let nuevasmasterias = this.state.materias
        nuevasmasterias.push({materia, nota})
        this.setState({materias: nuevasmasterias})

    }

    eliminar(){

    }



render(){
    return(
        <div className='Contenedor'>
             <div className='Contenedordecomponenteenvio'>

                 <Envio
                 guardar={(materia, nota) => this.guardar(materia, nota)}
                    
                 />
             </div>
            <Formulario 
            
            />
             <Recepcion/>
        </div>

)
}
}