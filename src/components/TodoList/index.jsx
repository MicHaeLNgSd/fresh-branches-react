import { Field, Form, Formik } from 'formik';
import React from 'react';
import useTodo from '../../hooks/useTodo';

const initialValues = {
  input: '',
};

function TodoList() {
  const { todos, addTodo, toggleCompleted, deleteTodo } = useTodo();

  const handleSubmit = (vals, bag) => {
    addTodo(vals.input);
    bag.resetForm();
  };

  const todoItems = todos.map((t) => (
    <li key={t.id}>
      <article>
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => toggleCompleted(t.id)}
        />
        <p>{t.text}</p>
        <button onClick={() => deleteTodo(t.id)}>X</button>
      </article>
    </li>
  ));

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="input" />
          <button type="submit">+</button>
        </Form>
      </Formik>
      <ul>{todoItems}</ul>
    </div>
  );
}

export default TodoList;
