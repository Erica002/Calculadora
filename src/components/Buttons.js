import React from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'


export default props => {
  const stylesButton = [styles.buttons]
  if (props.deleta) stylesButton.push(styles.buttonDeleta)
  if (props.zero) stylesButton.push(styles.buttonZero)
  return (
      <TouchableHighlight onPress={() => props.onClick(props.text)}>
          <Text style={stylesButton}>{props.text}</Text>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
     
    buttonDeleta: {
        height: 65,
        width: 65,
        fontSize: 12,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#FF8C00',
    },

    buttons: {
        fontSize: 15,
        height: 65,
        width: 65,
        padding: 19,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'black',
        textAlign: 'center',
        color: 'gray',
        backgroundColor: '#363636',
        
       
    },

    buttonZero: {
      fontSize: 15,
      height: 65,
      width: 128,
      backgroundColor: '#363636',
      textAlign: 'center',
      color: 'gray',
      borderColor: 'black',
      borderRadius: 10,
  },
})
