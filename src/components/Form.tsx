import React, { useState } from "react";

type FormProps = {
    createTodo: (cr: object) => void;
};

const Form: React.FC<FormProps> = ({ createTodo }) => {
    // 入力値のstate管理
    const [enteredTodo, setEnteredTodo] = useState("");

    // 作成したTODOを[createTodo]に渡す
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
          id: Math.floor(Math.random() * 1e5),
          content: enteredTodo,
        };
        createTodo(newTodo);
        setEnteredTodo("");
    };

    return (
        <div>
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="入力してね"
              value={enteredTodo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEnteredTodo(e.target.value)
              }
            />
            <button>+</button>
          </form>
        </div>
    );
};

export default Form;