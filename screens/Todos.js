import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from '../components/TodoItem';

const TodosScreen = () => {
  const todos = useSelector(state => state.todosReducer.todos); // we use useSelector to get initial data
  return (
    <>
      <View>
        <FlatList
          data={todos}
          renderItem={itemData => <TodoItem itemData={itemData} />}
          keyExtractor={todo => todo.id}
        />
      </View>
    </>
  );
};

export default TodosScreen;
