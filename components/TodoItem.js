import React from 'react';
import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTodo} from '../redux/todos';

const TodoItem = ({itemData}) => {
  const dispatch = useDispatch(); // we create an useDispatch obj to bind our dispatchers
  return (
    <>
      <View style={styles.todoRow}>
        <Pressable
          style={styles.textContainer}
          onPress={() => {
            dispatch(removeTodo({todo: itemData.item}));
            Alert.alert(
              `Todo with ${itemData.item.id} ID has been deleted successfully!`,
            );
          }}>
          <Text style={styles.text}>{itemData.item.todo}</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  todoRow: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 8,
    marginHorizontal: 8,
    marginTop: 5,
  },
  textContainer: {
    paddingLeft: 8,
  },
  text: {
    color: 'black',
  },
});

export default TodoItem;
