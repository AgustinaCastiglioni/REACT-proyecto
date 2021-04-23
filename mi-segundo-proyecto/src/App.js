import Header from './components/Headers';
import Tarjeta from './components/Tarjetas';


import React, {Component} from 'react';

class App extends Component  {
  constructor(props){
    super(props);
    this.state={
       infoJson: [],
       infoOriginal: []
      
    }
}
componentDidMount(){
  fetch('https://randomuser.me/api/?results=20')
 .then(result=> result.json())
  .then(data=>{
    this.setState({infoJson: data.results, infoOriginal: data.results})
   } )
  }
resetTarjetas(){
  this.setState({
    infoJson: this.state.infoOriginal
      })
}

 agregarTarjeta(){
  var numeroagregar = document.getElementById("numeroTarjetas").value
 fetch('https://randomuser.me/api/?results='+ numeroagregar )
 .then(result=> result.json())
 .then(data=>{
  var nuevoArray= this.state.infoJson.concat(data.results)
  console.log(nuevoArray)
 this.setState({
   infoJson: nuevoArray})
  } )
 }
  borrarTarjeta(id){
   
let resultado= this.state.infoJson.filter(info=> info.id !== id)

  this.setState({
infoJson: resultado
  })
  }

 filtrarNombre(name){
  var filtronombre = document.getElementById("nombreFiltro").value
 let resultado= this.state.infoJson.filter(info=> info.name.first === filtronombre)

this.setState({
infoJson: resultado
 })
  console.log(this.state.infoJson)
  }
  filtrarApellido(){
    var filtroapellido = document.getElementById("apellidoFiltro").value
   let resultado= this.state.infoJson.filter(info=> info.name.last === filtroapellido)
  
  this.setState({
  infoJson: resultado
   })
    console.log(this.state.infoJson)
    }
    filtrarEdad(){
      var filtroedad = document.getElementById("edadFiltro").value
     let resultado= this.state.infoJson.filter(info=> info.dob.age === filtroedad)
    
    this.setState({
    infoJson: resultado
     })
      console.log(this.state.infoJson)
      }
      filtrarPais(){
        var filtropais= document.getElementById("paisFiltro").value
       let resultado= this.state.infoJson.filter(info=> info.location.country === filtropais)
      
      this.setState({
      infoJson: resultado
       })
        console.log(this.state.infoJson)
        }
  render() {
  
  return (

    <div className="App">
       <Header/>
       <div className="tarjetas">
       <button style={{textAlign:'center'}} 
       onClick= {(event)=> this.resetTarjetas()}
       >RESET CARDS</button>
    
    <button style={{textAlign:'center'}} 
       onClick= {(event)=> this.agregarTarjeta()}
       >ADD CARDS</button>

<button style={{textAlign:'center'}} 
       onClick= {(event)=> this.filtrarNombre()}
       >FILTRAR NOMBRE</button>
       <button style={{textAlign:'center'}} 
       onClick= {(event)=> this.filtrarApellido()}
       >FILTRAR APELLIDO</button>
        <button style={{textAlign:'center'}} 
       onClick= {(event)=> this.filtrarEdad()}
       >FILTRAR EDAD</button>
        <button style={{textAlign:'center'}} 
       onClick= {(event)=> this.filtrarPais()}
       >FILTRAR PAÍS</button>

       <input id='numeroTarjetas' placeholder='Ingresa el valor'/>
       <input id='nombreFiltro' placeholder='Ingresa el nombre'/>
       <input id='apellidoFiltro' placeholder='Ingresa el apellido'/>
       <input id='edadFiltro' placeholder='Ingresa la edad'/>
       <input id='paisFiltro' placeholder='Ingresa el país'/>
      
       <div class="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
      
      {
        //La info del estado es la que se modifica, poreso uso this.state.infoJson
        this.state.infoJson.map((tarjetas, idx)=>{
          return <Tarjeta 
          
          onDelete={this.borrarTarjeta.bind(this)} key={tarjetas.id} infoTarjetas={tarjetas} name={tarjetas.name.first} id={tarjetas.id} colorFondo='white'
          />
        
        })
      }

    </div>
    
    </div>
    
    </div>
  

     
  );
}
}


export default App;