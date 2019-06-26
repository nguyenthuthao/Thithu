import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Bills() {
  return (
      <View style={styles.container}>
        <Text style= {styles.textview}>Invoice Management</Text>
        <TouchableOpacity style={styles.button} 
            onPress={()=>{Actions.insert()}}>
            <Text style={styles.btnText}>Insert InVoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={()=>{Actions.bill()}}>
            <Text style={styles.btnText}>List Invoice</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#94af76',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textview:{
        textAlign:'center',
        fontSize: 28,
        fontFamily:'Arial',
        color: '#ffff',
        marginBottom:20,
    },
    button:{
        width: 300,
        marginVertical: 10,
        backgroundColor:'#33691e',
        height: 50,
        borderRadius: 25,
        paddingVertical: 10, 
    },
    btnText:{
        fontSize: 18,
        color:'#ffffff',
        textAlign:'center',
        fontWeight:'bold',
    },
  });