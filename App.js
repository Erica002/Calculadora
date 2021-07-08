import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Buttons from './src/Buttons';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.visor}>  </Text>
      </View>
          
    <View style={styles.buttonDeleta}>
      <Buttons text ='CE/C' deleta />
    </View>
    <View style={styles.buttons}>  
      <Buttons text = '7'  />
      <Buttons text = '8'  />
      <Buttons text = '9'  />
      <Buttons text = '%'  />
      <Buttons text = '>'  />
      <Buttons text = '4'  />
      <Buttons text = '5'  />
      <Buttons text = '6'  />
      <Buttons text = 'X'  />
      <Buttons text = '÷'  />
      <Buttons text = '1'  />
      <Buttons text = '2'  />
      <Buttons text = '3'  />
      <Buttons text = '+'  />
      <Buttons text = '-'  />
      <Buttons text = '0' zero />
      <Buttons text = '00' />
      <Buttons text = '.'  />
      <Buttons text = '='  />
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

  visor: {
    height: 60,
    width: 320,
    padding: 20,
    margin: 5,
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'gray',
      
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