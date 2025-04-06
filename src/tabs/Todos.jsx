import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const todos = [
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ];

  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
