import {useState} from "react";
import List from "./List";
import Form from "./Form";

// TODOの型を定義
export type Todo = {
    id: number;
    content: string;
    editing: boolean;
};

const Todo = () => {
    const todoList = [
        {
            id: 1,
            content: "店を予約する",
            editing: false,
        },

        {
            id: 2,
            content: "卵を買う",
            editing: false,
        },

        {
            id: 3,
            content: "郵便をだす",
            editing: false,
        },
    ];

    // ToDoリストのState管理
    const [todos, setTodos] = useState <Todo[]>(todoList);
    
    // 削除
    const deleteToDo = (id: number) => {
        const newToDos = todos.filter((todo) =>{
            return todo.id !== id;
        });
        setTodos(newToDos);
    };

    // 作成
    const createToDo = (todo: Todo) => {
        setTodos([...todos,todo]);
    };

    // 更新
    const updateToDo = (todo: Todo) => {
        const newToDos = todos.map((_todo) => {
            return _todo.id === todo.id ? {..._todo, ...todo} : {..._todo};
        });
        setTodos(newToDos);
    };

    return (
        <>
          // 各々に必要なPropsを渡す
          <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          <Form createTodo={createTodo} />
        </>
      );
};
export default Todo;