import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todos';

const HomeScreen = () => {
  const [todoName, setTodoName] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.layoutContainer}>
        <Text style={styles.headerText}>New ToDo</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Todo..."
          value={todoName}
          onChangeText={e => {
            setTodoName(e);
          }}
        />
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            dispatch(addTodo({todo: todoName}));
          }}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'red',
    fontSize: 24,
    fontFamily: 'bold',
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    marginTop: 8,
    borderRadius: 15,
  },
  buttonContainer: {
    backgroundColor: '#24b924',
    marginTop: 8,
    borderRadius: 15,
  },
  buttonText: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    color: 'white',
  },
});

export default HomeScreen;
