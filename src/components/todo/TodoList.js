import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodoActions } from "../../store/ducks/todos";

import "./styles.css";

function TodoList(props) {
  const [text, setText] = useState("");

  const { todos, addTodoRequest, toggleTodo, removeTodo } = props;

  function handleSubmit() {
    let todo = {id:Math.random(),text}
    addTodoRequest(todo);
    setText("");
  }

  return (
    <section>
      <form onSubmit={() => handleSubmit()}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Novo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


