import React, {Component} from "react";
import { 
    View,
    Text,
    StyleSheet, 
    Image,
    TouchableOpacity,
} from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Go',
      ultimoTempo: null,
    };

    //Variavel do timer do relogio
    this.timer = null;

    this.go = this.go.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  //Função do botão play e pause
  go(){

    if(this.timer != null){
      //vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Go'});
    }else{
      //Começa girar o Timer
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'Stop'});
    }

  }

  //Função para Limpar cronometro
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimoTempo: this.state.numero,
      numero: 0,
      botao: "Go",
    })

  }

  render(){
    return(
      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometroImg}
        />

        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Clear</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.areaUltima}>
            <Text style={styles.txtTempo}>
               {this.state.ultimoTempo > 0 ? '" '+ this.state.ultimoTempo.toFixed(2)+'s "' : ''} 
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima:{
    marginTop: 50,
  },
  txtTempo:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  },


});

export default App;