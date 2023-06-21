import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import Item from './components/Item';
import ItemInput from './components/ItemInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [items, setItems]= useState([]);

  function startAddItemHandler(){
    setModalIsVisible(true);
  }

  function endAddItemHandler(){
    setModalIsVisible(false);
  }


  function addItemHandler(enteredItem) {
    setItems(currentItems => [
      ...currentItems, 
      {text: enteredItem, id: Math.random().toString()},
    ]);
    endAddItemHandler();
  };

  function deleteItemHandler(id){
    setItems(currentItems => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button 
        title='Add new item' 
        color='#5e0acc' 
        onPress={startAddItemHandler}/>
      <ItemInput 
        visible={modalIsVisible} 
        onAddItem={addItemHandler} 
        onCancel={endAddItemHandler}
      />
      <View style={styles.itemsContainer}>
      <FlatList 
        data={items} 
        renderItem={itemData => {
        return (
        <Item 
        text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteItem={deleteItemHandler}
        />
        );
      }} 
      keyExtractor={(item, index) => {
          return item.id;
      }}
      alwaysBounceVertical={false} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#F9EDED',
  },
  itemsContainer: {
    flex: 6
  },

});
