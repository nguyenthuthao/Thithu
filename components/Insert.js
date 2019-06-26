import React,{useState} from 'react';
import { StyleSheet,Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Header} from 'react-native-elements';
import {firebaseApp} from './Firebase';

export default function Insert(props) {
  const[documentIds, setDocumentId]= useState('');
    const[number, setNumber]= useState('');
    const[content, setContent]= useState('');
    const[price, setPrice]= useState('');

    componentDiMount = async()=>{
        await Permissions.askAsync()
    }
    function storeNews(DocumentID,Number,Content,Price ) {
        firebaseApp.database().ref('bills/' + DocumentID).push({
                    
          number : Number,
          content: Content,
          price: Price,
                 }, function(error) {
                   if (error) {
                     // The write failed...
                     alert('Loi')
                   } else {
                     // Data saved successfully!
                     alert(Actions.list());
                   }
                 });
       }
  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={()=>{Actions.bill()}}>
      <Header
      placement="left"
      leftComponent={{ icon: 'home', color: '#fff' }}
      centerComponent={{ text: 'Insert', style: { color: '#fff', fontSize: 18 } }}
      backgroundColor= '#33691e'
    />
    </TouchableOpacity>
    <Text style={styles.text1}>Number Table</Text>
     <View style={styles.inputBox}>
       <TextInput placeholder = 'Insert'
       placeholderTextColor = '#fff'
       value={number}
       onChangeText={(text)=>setNumber(text)}/>
     </View>
     <Text style={styles.text1}>Content</Text>
     <View style={styles.inputBox}>
       <TextInput placeholder = 'Insert'
       placeholderTextColor = '#fff'
       value={content}
       onChangeText={(text)=>setContent(text)}/>
     </View>
     <Text style={styles.text1}>Price</Text>
     <View style={styles.inputBox}>
       <TextInput placeholder = 'Insert'
       placeholderTextColor = '#fff'
       onChangeText={(text)=>setPrice(text)}
       value={price}/>
     </View>
     <TouchableOpacity style={styles.button}
       onPress={()=>storeNews(documentIds,number,content,price)}>
       <Text style={styles.btnText}>Insert</Text>
   </TouchableOpacity>
 </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#94af76',
    },
    inputBox:{
        width: 300,
        height: 50,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingLeft: 20,
        paddingTop: 10,
        fontSize: 16,
        color:'#ffffff',
    },
      text1:{
        marginBottom:5,
        fontSize: 16,
        color:'#ffffff',
        fontWeight:'bold',
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