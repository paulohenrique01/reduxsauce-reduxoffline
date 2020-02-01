import axios from './axios';

const saveTodo = (data) => axios.post('/todos', data);

export default {
    saveTodo
};