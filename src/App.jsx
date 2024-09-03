import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodoText) {
    if (editingTodoId) {
      // Update existing todo
      const updatedTodos = todos.map(todo =>
        todo.id === editingTodoId
          ? { ...todo, text: newTodoText }
          : todo
      );
      persistData(updatedTodos);
      setTodos(updatedTodos);
      setEditingTodoId(null); // Clear editing state
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now().toString(), // Unique ID
        text: newTodoText,
        completed: false
      };
      const newTodoList = [...todos, newTodo];
      persistData(newTodoList);
      setTodos(newTodoList);
    }
    setTodoValue('');
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(id) {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setTodoValue(todoToEdit.text); // Set the text for editing
      setEditingTodoId(id); // Set the editingTodoId to the current todo's id
    }
  }

  function handleToggleTodo(index) {
    const newTodoList = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos).todos || []);
    }
  }, []);

  return (
    <>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos} 
      />
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        handleToggleTodo={handleToggleTodo} 
        todos={todos} 
      />
    </>
  );
}

export default App;

