import React, { Component } from 'react';

export default class Recepcion extends Component {
    cambiar = (index, e) => {
        const nuevaNota = e.target.value;
        this.props.actualizarNota(index, nuevaNota);
    };

    render() {
        return (
            <div>
                {this.props.materias.map((materia, index) => (
                    <div key={index}>
                        <h2>Materia: {materia.materia}</h2>
                        <p>Nota: 
                            <input 
                                type="text" 
                                value={materia.nota} 
                                onChange={(e) => this.cambiar(index, e)} 
                            />
                        </p>
                    </div>
                ))}
                <h2>Promedio: {this.props.promedio}</h2>
            </div>
        );
    }
}
