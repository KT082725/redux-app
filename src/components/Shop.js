import React from 'react'
import { useContext } from 'react';
import { amountDispatchContext } from '../context';
const Shop = () => {
  const dispatch=useContext(amountDispatchContext);
  function withdrawMoney(money) {
    dispatch({
      type: 'withdraw',
      money:money
    });
  }

  function depositMoney(money) {
    dispatch({
      type: 'deposit',
      money:money
    });
  }
  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>withdrawMoney(100)}>-</button>
      Add to cart
      <button className="btn btn-primary mx-2" onClick={()=>depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop
