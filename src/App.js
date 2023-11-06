import "./App.css";
import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  // 상태 변수 초기화
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [number, setNumber] = useState(0); // 할 일의 ID 번호
  const [title, setTitle] = useState(""); // 새로운 할 일의 제목
  const [body, setBody] = useState(""); // 새로운 할 일의 내용

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 할 일 목록을 불러옴
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  function addTodo(title, body) {
    // const addTodo = (title, body) => { 화살표 함수
    // 제목과 내용이 비어있는지 확인
    if (title.trim() === "") {
      alert("제목을 입력하세요.");
      return; // 제목이 비어있을 경우 함수 실행 중단
    }

    if (body.trim() === "") {
      alert("내용을 입력하세요.");
      return; // 내용이 비어있을 경우 함수 실행 중단
    }
    // 할 일 추가
    const newTodo = {
      id: number, // ID 번호 할당
      title,
      body,
      isDone: false, // 완료 여부 판단
    };

    // 기존 할 일 목록에서 새로운 목록을 업데이트 하여 생성
    const updatedTodos = [...todos, newTodo];

    // 할 일 목록 상태 업데이트
    setTodos(updatedTodos);

    // 로컬 스토리지에 할 일 목록 저장
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // 새로운 할 일을 추가했으므로 ID 번호 증가 및 입력 필드 초기화
    setNumber(number + 1);
    setTitle(""); // 제목 초기화
    setBody(""); // 내용 초기화
  }

  function deleteTodo(id) {
    // 'const deleteTodo = (id) => {' 화살표 함수
    // 할 일 삭제 함수
    // ID 번호가 일치하지 않는 할 일들로 업데이트된 할 일 목록 생성
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // 할 일 목록 상태 업데이트
    setTodos(updatedTodos);

    // 로컬 스토리지에 할 일 목록 저장
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function toggleComplete(id) {
    // 'const toggleComplete = (id) => {' 화살표 함수
    // 할 일의 완료 여부를 토글하는 함수
    // ID 번호가 일치하는 할 일의 완료 상태를 변경
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });

    // 할 일 목록 상태 업데이트
    setTodos(updatedTodos);

    // 로컬 스토리지에 할 일 목록 저장
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <Layout>
      <div className="container">
        <div>My Todo List</div>
        <div>최광희</div>
      </div>

      <form className="form-add" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="form-label">제 목</label>
          <input
            type="text"
            className="add-input input-body"
            value={title} // 입력 필드와 제목 상태를 연결
            onChange={(e) => setTitle(e.target.value)} // 입력 값이 변경되면 제목 상태 업데이트
          />
          <label className="form-label">내 용</label>
          <input
            type="text"
            className="add-input"
            value={body} // 입력 필드와 내용 상태를 연결
            onChange={(e) => setBody(e.target.value)} // 입력 값이 변경되면 내용 상태 업데이트
          />
        </div>
        <button
          className="add-button"
          onClick={() => addTodo(title, body)} // 상태를 이용하여 할 일을 추가
        >
          추가하기
        </button>
      </form>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </Layout>
  );
}

export default App;
