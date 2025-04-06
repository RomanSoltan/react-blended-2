import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo }) => {
  const { id, text } = todo;
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO {id}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
