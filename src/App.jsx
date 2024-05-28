import React, { Component } from 'react';
import './App.css';

import Envio from './componentes/Envio';
import Recepcion from './componentes/Recepcion';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materias: [],
            promedio: 0
        };
    }

    calcularPromedio(notas) {
        const suma = notas.reduce((acumulador, nota) => acumulador + parseInt(nota), 0);
        return notas.length > 0 ? suma / notas.length : 0;
    }

    guardar = (materia, nota) => {
        const nuevasMaterias = [...this.state.materias, { materia, nota }];
        const notas = nuevasMaterias.map(materia => materia.nota);
        const promedio = this.calcularPromedio(notas);
        this.setState({ materias: nuevasMaterias, promedio });
    };

    actualizarNota = (index, nuevaNota) => {
        const nuevasMaterias = [this.state.materias];
        nuevasMaterias[index].nota = nuevaNota;
        const notas = nuevasMaterias.map(materia => materia.nota);
        const promedio = this.calcularPromedio(notas);
        this.setState({ materias: nuevasMaterias, promedio });
    };

    render() {
        return (
            <div className='Contenedor'>
                <div className='Contenedordecomponenteenvio'>
                    <Envio guardar={this.guardar} />
                </div>
                
                <Recepcion
                    materias={this.state.materias}
                    promedio={this.state.promedio}
                    actualizarNota={this.actualizarNota}
                />
            </div>
        );
    }
}
