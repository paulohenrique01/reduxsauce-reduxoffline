import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  uuidv4  from "uuid/v4";

import { Creators as TodoActions } from "../../store/ducks/todos";


import "./styles.css";

function TodoList(props) {
  const [text, setText] = useState("");

  const { todos, addTodoRequest, toggleTodo, removeTodo } = props;

  function handleSubmit() {
    let todo = {text,hash: uuidv4()}
    addTodoRequest(todo);
    setText("");
  }

  return (
    <section>
      <form  >
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button type="button"  onClick={() => handleSubmit()}>Novo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.hash}>
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


