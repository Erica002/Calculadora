import React from 'react'

import{StyleSheet, Text, View} from 'react-native'

export default props =>{ 
    return (
        <View style={styles.tela}>
            <Text style={styles.displayDigito}
                numberOfLines={1}>
                {props.digito}
            </Text>
            <Text style={styles.displayRes}
                numberOfLines={1}>
                {props.result}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tela:{
        height: 70,
        width: 320,
        padding: 20,
        margin: 5,
        borderRadius: 5,
        color: 'black',
        backgroundColor: 'gray',
              
    },
          
    displayDigito: {
        fontSize: 18,
        color: 'black'
    },

    displayRes: {
        fontSize: 20,
        color: 'black'
    },

})