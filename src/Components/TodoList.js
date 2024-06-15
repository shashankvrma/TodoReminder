import React from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, markCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
  

    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoItem todo={todo} 
            onRemovePressed = {onRemovePressed} 
            onCompletePressed = {onCompletePressed}
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos : state.todos,
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(markCompleted(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);