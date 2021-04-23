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
                <p>{this.props.infoTarjetas.email}</p>
                <p>{this.props.infoTarjetas.dob.date} , {this.props.infoTarjetas.dob.age}</p>
                
                
                <button  onClick= {(event)=>this.mostrarDetalle("block")}> VER DETALLES </button>
                <div  style={{display: this.state.display}}>
                    <p>Calle y Número:  {this.props.infoTarjetas.location.street.number}  {this.props.infoTarjetas.location.street.name} </p>
                    <p>Ciudad y Estado:  {this.props.infoTarjetas.location.city}/{this.props.infoTarjetas.location.state}</p>
                    <p>País: {this.props.infoTarjetas.location.country}</p>
                    <p>Codigo Postal: {this.props.infoTarjetas.location.postcode}</p>
                    <p>Registrado:{this.props.infoTarjetas.registered.date}</p>
                    <p>Teléfono: {this.props.infoTarjetas.phone}</p>
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