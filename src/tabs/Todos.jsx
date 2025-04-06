import Form from '../components/Form/Form';
import Text from '../components/Text/Text';

const Todos = () => {
  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

export default Todos;
