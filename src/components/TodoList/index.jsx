import React from 'react';
import withTheme from '../withTheme';
import TodoItem from '../TodoItem';

function TodoList({ data: { data: todos, isLoading, error } }) {
  const TodoItemWithTheme = withTheme(TodoItem);
  const todoItem = todos.map((t) => <TodoItemWithTheme key={t.id} info={t} />);
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>error:{error}</div>;
  return todoItem;
}

export default TodoList;
