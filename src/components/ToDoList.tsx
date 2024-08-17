// import React, { useState } from 'react';

// function TodoListX() {
// const [todos, setTodos] = useState([
//     { text: 'Todo 1', completed: false },
//     { text: 'Todo 2', completed: false },
//     { text: 'Todo 3', completed: false },
// ]);
// const [newTodoText, setNewTodoText] = useState('');

// const addTodo = () => {
//     setTodos([...todos, { text: newTodoText, completed: false }]);
//     setNewTodoText('');
// };

// const toggleTodo = (index: number) => {
//     setTodos(
//       todos.map((todo, i) =>
//         i === index ? { ...todo, completed: !todo.completed } : todo,
//       ),
//     );
// };

// const deleteTodo = (index: number) => {
//     setTodos(todos.filter((todo, i) => i !== index));
// };

// return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={newTodoText}
//         onChange={(e) => setNewTodoText(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(index)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
// );
// }

function TodoList() {
    return (
        <div>
            <ul>
                <li>
                    <input type='checkbox'
                        value={'item 1'}></input>
                    <p>item 1</p>
                </li>
                <li>
                    <input type='checkbox'
                        value={'item 2'}></input>
                    <p>
                        item 2</p>
                </li>
                <li>
                    <input type='checkbox'
                        value={'item 3'}></input>
                    <p>item 3</p>
                </li>
                <li>
                    <input type='checkbox'
                        value={'item 4'}></input>
                    <p>item 4</p>
                </li>
            </ul>
        </div>
    )
}

export default TodoList;
