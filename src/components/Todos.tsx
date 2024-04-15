import Todo from "./Todo"


const Todos = (props: todosPropType) => {

  return (
    <>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </>
  );
}

export default Todos


