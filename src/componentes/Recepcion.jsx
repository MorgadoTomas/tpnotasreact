import { Component } from "react";
 export default class Recepcion extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }





render(){
    return(
        <div>
            <h1>Materia: {this.state.materia}</h1>
            Nota:<input type="text"
            value={this.state.nota}
            onChange={(e) => this.setState({ nota : e.target.value})}
            />
        </div>
    )
}
}