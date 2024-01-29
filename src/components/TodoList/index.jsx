import React from 'react';
import withTheme from '../withTheme';
import TodoItem from '../TodoItem';

function TodoList({ data: { data: todos, isLoading, error } }) {
  const TodoItemWithTheme = withTheme(TodoItem);
  const todoItem = todos.map((t) => <TodoItemWithTheme key={t.id} info={t} />);
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>error:{error}</div>}
      {todoItem}
    </>
  );
}

export default TodoList;
