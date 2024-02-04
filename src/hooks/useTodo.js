import { useState } from 'react';

function useTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((todos) => {
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 0;
      const newTodo = [
        ...todos,
        {
          id: newId,
          text: text,
          completed: false,
        },
      ];
      return newTodo;
    });
  };

  const toggleCompleted = (id) => {
    console.log('toggle');
    setTodos((todos) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex((t) => t.id === id);
      if (index !== -1) {
        newTodos[index].completed = !newTodos[index].completed;
      }
      return newTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos((todos) => {
      return todos.filter((el) => el.id !== id);
    });
  };

  return { todos, addTodo, deleteTodo, toggleCompleted };
}

export default useTodo;
