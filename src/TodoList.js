import React from "react";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working</h2>
      <div className="list-box">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <div className="todo-container" key={todo.id}>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-delete-button"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                  <button
                    className="todo-complete-button"
                    onClick={() => toggleComplete(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <h2 className="list-title">Done!</h2>
      <div className="list-box">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <div className="todo-container" key={todo.id}>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-delete-button"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    삭제
                  </button>
                  <button
                    className="todo-complete-button"
                    onClick={() => toggleComplete(todo.id)}
                  >
                    취소
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default TodoList;
