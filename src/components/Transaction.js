import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const plusMinus = transaction.amount < 0 ? 'minus' : 'plus';

  return (    
    <li className={plusMinus}>
        {transaction.text} <span>{sign}Rp{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>      
  
  )
}

export default Transaction
