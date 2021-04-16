import React, {Component} from 'react';

class Tarjeta extends Component  {
    constructor(props){
        super(props);
        this.state={
            colorInicial: props.colorFondo,
           colorFondo: props.colorFondo,
           id: props.infoJson
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
mostrarDetalle= (color)=> {
    document.getElementById('detalleContacto').style.cssText = "display:block";
  
    
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
                <img src={this.props.infoTarjetas.image} alt=""/>
                </div>
                <div class="uk-card-body info">
                <h3 class="uk-card-title" style={{color: "blue"}}> Apellido </h3>
                <p>Nombre del contacto</p>
                <p>Email</p>
                <p>(Fecha de nacimiento, edad)</p>
                
                
                <button  onClick= {(event)=>this.mostrarDetalle(this.state.showDetalle)}> VER DETALLES </button>
                <div id="detalleContacto">
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