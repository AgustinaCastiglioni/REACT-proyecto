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
// agregarTarjeta(){
//  fetch()
//   .then(result=> result.json())
//  .then(data=>{
//    this.state.InfoJson.push(data.result[0])
//    this.setState({InfoJson: data.result})
//   } )
// }
  borrarTarjeta(id){
    console.log(id)
let resultado= this.state.infoJson.filter(info=> info.id !== id)

  this.setState({
infoJson: resultado
  })
  console.log(this.state.infoJson)
  }
  render() {
  
  return (

    <div className="App">
       <Header/>
       <div class="tarjetas">
       <button style={{textAlign:'center'}} 
       onClick= {(event)=> this.resetTarjetas()}
       >RESET CARDS</button>
       <div class="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
      
      {
        //La info del estado es la que se modifica, poreso uso this.state.infoJson
        this.state.infoJson.map((tarjetas, idx)=>{
          return <Tarjeta onDelete={this.borrarTarjeta.bind(this)} key={tarjetas.id} infoTarjetas={tarjetas}  id={tarjetas.id} colorFondo='white'/>
        })
      }
    </div>
    </div>
    
    </div>
  

     
  );
}
}


export default App;