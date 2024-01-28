import React from 'react';
import TodoItemWithTheme from '../TodoItemWithTheme';

function TodoList({ data: { data: todos, isLoading, error } }) {
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
