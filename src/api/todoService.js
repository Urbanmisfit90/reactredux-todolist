import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/todos';

export const getTodos = () => {
  return axios.get(API_BASE_URL);
};

export const addTodo = (todo) => {
  return axios.post(API_BASE_URL, todo);
};

export const updateTodo = (id, updatedTodo) => {
  return axios.put(`${API_BASE_URL}/${id}`, updatedTodo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};