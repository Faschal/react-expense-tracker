
const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const plusMinus = transaction.amount < 0 ? 'minus' : 'plus';

  return (    
    <li className={plusMinus}>
        {transaction.text} <span>{sign}Rp{Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
    </li>      
  
  )
}

export default Transaction
