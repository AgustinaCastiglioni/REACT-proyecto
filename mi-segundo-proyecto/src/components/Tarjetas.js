import React, {Component} from 'react';

class Tarjeta extends Component  {
    constructor(props){
        super(props);
        this.state={
           colorInicial: props.colorFondo,
           colorFondo: props.colorFondo,
           id: props.infoJson,
           display: "none"
           
        }
    }
    
    componentDidMount(){
        console.log('Se creo la tarjeta: ' + this.props.id + ' ' + this.props.name)
    }

    componentWillUnmount(){
        console.log('Se borro la tarjeta: ' + this.props.id + ' ' + this.props.name)
    }

    componentDidUpdate(prevProps, prevStates){
        console.log('Se actualizo la tarjeta: ' + this.props.id + ' ' + this.props.name)
        console.log(prevProps)
        console.log(prevStates.color + '' + this.state.color) 
    }

    cambiarColor= (color)=> {
        if(this.state.colorFondo !== 'lightgreen'){
        this.setState({
            colorFondo: color,
        
    })
     }
     else{
        this.setState({
            colorFondo: 'lightgreen',
     })
    }
   

}
mostrarDetalle= (mostrar)=> {
    this.setState({
        display: mostrar
    })
  
    }
    
    render() {
        return (
        
        <div class="cuerpo">
           
            <div class="uk-card uk-card-body card" style={{backgroundColor: this.state.colorFondo}}
            onMouseEnter={(event)=> this.cambiarColor('lightgrey')}
                onMouseLeave= {(event)=>this.cambiarColor(this.state.colorInicial)}
            >
       
            <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={this.props.infoTarjetas.picture.large} alt=""/>
                </div>
                <div class="uk-card-body info">
                <h3 class="uk-card-title" style={{color: "blue"}}> {this.props.infoTarjetas.name.last} </h3>
                <p>{this.props.infoTarjetas.name.first} </p>
                <p>Email</p>
                <p>(Fecha de nacimiento, edad)</p>
                
                
                <button  onClick= {(event)=>this.mostrarDetalle("block")}> VER DETALLES </button>
                <div  style={{display: this.state.display}}>
                    <p>Calle y Número</p>
                    <p>Ciudad/Estado</p>
                    <p>País</p>
                    <p>Código postal</p>
                    <p>Fecha de Registro</p>
                    <p>Teléfono</p>
                </div>
                <br/>
                <button
                onClick= {this.props.onDelete.bind(this, this.props.id)}
                >BORRAR</button>
                </div>
            </div>

        </div>
        </div>
   
   
  
    
    );
  }
}
  
  export default Tarjeta;