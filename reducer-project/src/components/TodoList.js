import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from '../reducers/TodoReducer';

const TodoList = props => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleChanges = e => {
        setTask(e.target.value)
    }

    // const completeTask = e => {
    //     state.forEach(e => {
    //         if (e.completed === true) {

    //         }
    //     })
    // }

    // const toggleComplete = clickedId => {
    //     const newTaskList = state.map(e => {
    //         if (e.id === clickedId) {
    //             return {
    //                 ...e, completed: !e.completed
    //             }
    //         } else {
    //             return e;
    //         }
    //     })
    //     return newTaskList;
    // }

    console.log(task)

    return (
        <div>
            <h1>To Do List!</h1>
            <div className='task-list'>
                {state.map(e => {
                    return (
                        <div className='task-card'>
                        <h4>Task:<br/> {e.item}</h4>
                        <h5>Status: {e.completed === true ? 'Completed!' : 'In progress...'}</h5>
                        <button onClick={item => {
                            dispatch({ type: 'MARK_COMPLETE', payload: !e.completed })
                        }}>Mark as complete</button>
                        </div>
                    )
                })}
                
            </div>

            <div>
                <form>
                    <label htmlFor='task'>New task: </label>
                    <input id='task' name='task' onChange={handleChanges} placeholder='' />
                    <button onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'ADD_TODO', payload: task })
                    }}>Add</button><br/>
                    <button onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'REMOVE_COMPLETE' })
                    }}>Clear Completed</button>
                </form>
            </div>

        </div>
    )
}

export default TodoList;