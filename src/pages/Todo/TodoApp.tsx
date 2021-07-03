import React, { useState } from 'react';

export function TodoApp() {
    const [value, setValue] = useState('');

    const defaultTodoList: string[] = [];
    const [todos, setTodos] = useState(defaultTodoList);

    const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const doClick = () => {
        const data = value;
        const tmpList: string[] = todos;
        tmpList.push(data);

        setTodos(tmpList);
        setValue('');
    };

    return (
        <div>
            <input value={value} type="text" onChange={doChange} />
            <button onClick={doClick}>Send</button>
            <ul>
                {todos.map((todo) => {
                    return <li>{todo}</li>;
                })}
            </ul>
        </div>
    );
}
