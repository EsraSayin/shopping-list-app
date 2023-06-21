import { useState } from 'react';
import {
  View, 
  TextInput, 
  Button, 
  StyleSheet, 
  Modal, 
  Image
} from 'react-native';

function ItemInput(props) {
 const [enteredItem, setEnteredItem] = useState('')

 function itemInputHandler(input) {
    setEnteredItem(input)
  };

  function addItemHandler(){
    if (enteredItem !== "" || undefined){
      props.onAddItem(enteredItem);
      setEnteredItem('');
    }
    
  }
 return (
  <Modal visible={props.visible} animationType='slide'>
 <View style= {styles.inputContainer}>
  <Image style={styles.image} source={require('../assets/images/giphy.gif')}/>
    <TextInput 
      style={styles.textInput} 
      placeholder='Add Item!' 
      onChangeText={itemInputHandler}
      value={enteredItem}
    />
    <View style={styles.buttonContainer}>
     <View style={styles.button}>
      <Button title='Add Item' onPress={addItemHandler} color='#59CCDA'/>
     </View>
    <View style={styles.button}>
      <Button title='Cancel' onPress={props.onCancel} color='#F29217'/>
    </View>
    </View>
  </View>
  </Modal>
  );
};

export default ItemInput;

const styles = StyleSheet.create({
 inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#F9EDED',
    backgroundColor: '#F9EDED',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 13
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button:{
    width: 100,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  }
});