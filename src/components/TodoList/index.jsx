import React from 'react';
import TodoItem from '../TodoItem';

function TodoList({ data: { data: todos, isLoading, error } }) {
  const todoItem = todos.map((t) => <TodoItem key={t.id} info={t} />);
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>error:{error}</div>;
  return todoItem;
}

export default TodoList;
