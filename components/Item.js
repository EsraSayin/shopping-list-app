import { StyleSheet, View, Text, Pressable } from "react-native";

function Item(props) {
    return (
    <View style={styles.itemStyle}>
    <Pressable 
    android_ripple={{color:'#dddddd'}} 
    onPress={props.onDeleteItem.bind(this, props.id)}>
    <Text style={styles.itemText}>
        {props.text}
     </Text>
     </Pressable>
     </View>
     );      
};

export default Item;

const styles = StyleSheet.create({
    itemStyle:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },
      itemText:{
        color: 'white',
        padding: 8,
      }
});