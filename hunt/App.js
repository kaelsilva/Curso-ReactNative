import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultadoText: '',
    }
    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    let imc = this.state.massa/(this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;

    if (s.resultado < 16)
      s.resultadoText = 'Magreza grave';
    else if (s.resultado >= 16 && s.resultado < 17)
      s.resultadoText = 'Magreza moderada';
    else if (s.resultado >= 17 && s.resultado < 18.5)
      s.resultadoText = 'Magreza leve';
    else if (s.resultado >= 18.5 && s.resultado < 25)
      s.resultadoText = 'Saudável';
    else if (s.resultado >= 25 && s.resultado < 30)
      s.resultadoText = 'Sobrepeso';
    else if (s.resultado >= 30 && s.resultado < 35)
      s.resultadoText = 'Obesidade Grau I';
    else if (s.resultado >= 35 && s.resultado < 40)
      s.resultadoText = 'Obesidade Grau II (severa)';
    else if (s.resultado >= 40)
      s.resultadoText = 'Obesidade Grau III (mórbida)';


    this.setState(s);
  }



  render(){
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder='Altura' keyboardType='phone-pad' style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder='Massa' keyboardType='numeric' style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 35}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89FFA5',
  },
  entradas: {
    flexDirection: 'row',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 27,
    color: '#33aa33',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: '#cccccf',
    fontSize: 65,
    padding: 15,
  }
});