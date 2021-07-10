import { StyleSheet, View, Text} from 'react-native';
import Buttons from './src/Buttons';
import Display from './src/Display';
import React, {useState} from 'react';

let estados={
  valorNaTela: '',
  resultado: 0,
  operado: false,
  ponto: false
}

export default function App() {
  const [valorNaT, setValorNaT] = useState(estados.valorNaTela)
  const [valResult, setValResult] = useState(estados.resultado)

  const adicionaDigito=(digito)=>{
    if(digito == '.' && !estados.ponto){
      estados.ponto = true
      estados.operado = false
    } else if (digito == '.' && estados.ponto){
        return
    }
    if(digito == '+' || digito == '-' || digito == '/' || digito == '*' || digito == "%"){
      estados.ponto = false
    }
    
    if((digito == '+' || digito == '-' || digito == '/' || digito == '*' || digito == "%") && estados.operado){
      estados.valorNaTela = estados.resultado
      estados.resultado = 0

    }

    estados.valorNaTela = estados.valorNaTela + digito
    setValorNaT(estados.valorNaTela)
    setValResult(estados.resultado)
    estados.operado = false
  }

  const limparCE=()=>{
    estados={
      valorNaTela: '',
      resultado: 0,
      operado: false,
      ponto: false
  }
  setValorNaT(estados.valorNaTela)
  setValResult(estados.resultado)
  }

  const operar=(digito)=>{
    if(digito=='CE/C'){
      limparCE()
      return
    }
    if(digito=='>'){
      estados.valorNaTela = valorNaT.substring(0, valorNaT.length-1)
      setValorNaT(estados.valorNaTela)
      return
    }
    try{
      estados.resultado = eval(estados.valorNaTela)
      estados.operado = true
      setValResult(estados.resultado)
    }catch{
      estados.resultado = 'Erro, tente novamente!'
      estados.operado = true
      setValResult(estados.resultado)
    }
  }
  
  return (
    <View style={styles.container}>
      <Display digito = {valorNaT} result = {valResult}/>
    <View style={styles.buttonDeleta}>
      <Buttons text ='CE/C' deleta onClick={() => {operar('CE/C')}}/>
    </View>
    <View style={styles.buttons}>  
      <Buttons text = '7' onClick={() => {adicionaDigito('7')}}/>
      <Buttons text = '8' onClick={() => {adicionaDigito('8')}}/>
      <Buttons text = '9' onClick={() => {adicionaDigito('9')}}/>
      <Buttons text = '%' onClick={() => {adicionaDigito('%')}}/>
      <Buttons text = '>' onClick={() => {operar('>')}}/>
      <Buttons text = '4' onClick={() => {adicionaDigito('4')}}/>
      <Buttons text = '5' onClick={() => {adicionaDigito('5')}}/>
      <Buttons text = '6' onClick={() => {adicionaDigito('6')}}/>
      <Buttons text = 'X' onClick={() => {adicionaDigito('*')}}/>
      <Buttons text = '÷' onClick={() => {adicionaDigito('/')}}/>
      <Buttons text = '1' onClick={() => {adicionaDigito('1')}}/>
      <Buttons text = '2' onClick={() => {adicionaDigito('2')}}/>
      <Buttons text = '3' onClick={() => {adicionaDigito('3')}}/>
      <Buttons text = '+' onClick={() => {adicionaDigito('+')}}/>
      <Buttons text = '-' onClick={() => {adicionaDigito('-')}}/>
      <Buttons text = '0' zero onClick={() => {adicionaDigito('0')}}/>
      <Buttons text = '00' onClick={() => {adicionaDigito('00')}}  />
      <Buttons text = '.' onClick={() => {adicionaDigito('.')}}/>
      <Buttons text = '=' onClick={() => {operar('=')}} />
    </View>
  </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 1,
  },

  buttonDeleta: {
    alignSelf: 'flex-end',
    marginRight: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    marginLeft: 15,
  },

  botaoResultado: {
    alignSelf: 'flex-end',
    marginRight: 18, 
  
  },  
});
