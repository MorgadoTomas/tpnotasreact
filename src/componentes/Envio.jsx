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
                Materia:  <input type="text" />
                Nota:     <input type="text" />
                <button>Enviar</button>
                {this.props.ejemplo()}


            </div>
        )
    }
}