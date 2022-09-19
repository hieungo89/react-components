const { useState } = React;

const TodoListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  let style = {
    textDecoration: isDone ? 'line-through' : 'none'
  };

  return (
      <li style={style} onClick={() => setIsDone(!isDone)}
      onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
      onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>
        {props.todo}
      </li>
  );
};

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
)

const App = () => (
  <div>
    <h1>My To-do List</h1>
    <ul>Grocery List
      <TodoList todos={['Rice', 'Meat', 'Veggies']} />
    </ul>
  </div>
)

ReactDOM.render(<App/>, document.getElementById("app"));