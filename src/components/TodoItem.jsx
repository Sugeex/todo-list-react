import deleteBtn from '../assets/deleteBtn.svg'

export default function TodoItem({text, id}) {
    return (
      <div className='itemList'>
        <label>
          <input className='checkTodo' type="checkbox" />
          {text}
        </label>
        <img src={deleteBtn} alt="delete" />
      </div>
    );  
}