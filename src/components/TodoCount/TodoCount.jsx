import './TodoCount.css';

export default function TodoCount({ counter }) {
  const complit = counter.filter((el) => el.isComplite === true).length;
  return (
    <div className="counterCont">
      <div className="amountT">
        <span>Tasks </span>
        <span>{counter.length}</span>
      </div>
      <div className='amountT'>
        <span>Done </span>
        <span>
          {complit} of {counter.length}
        </span>
      </div>
    </div>
  );
}
