import { Component } from "react";

export default class  Envio extends Component{
    constructor(props){
        super(props)
        this.state={
            materia:'',
            nota: 0

        }
    }

    render(){
        return(
            <div className="Envio">
                Materia:  <input type="text" 
                 value={this.state.materia}
                 onChange={(e) => this.setState({ materia : e.target.value})}
                />
                Nota:     <input type="text"
                value={this.state.nota}
                onChange={(e) => this.setState({ nota : e.target.value})}
                
                />
                <button onClick={() => this.props.guardar(this.state.materia, this.state.nota)}>Guardar</button>
               


            </div>
        )
    }
}