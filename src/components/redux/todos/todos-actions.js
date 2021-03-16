import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction ('todos/add', (name, number) => ({
        payload: {
        id: uuidv4(),
        name,
        number,
}
})
    );

const deleteTodo=createAction('todos/delete');
const changeFilter=createAction('todos/changeFilter');

export default  { addTodo, deleteTodo, changeFilter};