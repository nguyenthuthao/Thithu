import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import { firebaseApp } from './Firebase';

export default function Lists() {
  const[data,setData] = useState("");

  useEffect(()=>{
    readUserData();
  })

readUserData=()=> {
    firebaseApp.database().ref('bills/').on('value', function    (snapshot) {

      let array = [];
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        array.push({
          id : childSnapshot.key,
          number : childData.number,
          content : childData.content,
          price : childData.price
        });
      });
      setData(array);
     });
    }
    deleteData=(documentIds)=>{
      Alert.alert(
        'Do you sure to delete this bill ? ',
        [
          {
            text: 'OK',
            onPress :() => firebaseApp.database().ref('bills/' + documentIds).remove()
          }
        ]
      )
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{Actions.bill()}}>
      <Header
      placement="left"
      leftComponent={{ icon: 'home', color: '#fff' }}
      centerComponent={{ text: 'List', style: { color: '#fff', fontSize: 18 } }}
      backgroundColor= '#33691e'
    />
    </TouchableOpacity>
    <FlatList
        data={data}
        renderItem={({item}) =>{
          return(
            <View style={{flexDirection:'row',margin:20,marginRight:10}}>
                <Text style={styles.textview}>Number Table: {item.number}</Text>
                <TouchableOpacity onPress= {()=>deleteData(item.number)}>
                <Icon
                  style={{marginRight:'auto', marginLeft:'auto'}}
                  name='delete'
                  color='#517fa4'
                />
                </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor = {(item, index) =>  item.id}
        >
      </FlatList>
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#94af76',
    },
    textview:{
        textAlign:'center',
        fontSize: 16,
        fontFamily:'Arial',
        color: '#ffff',
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