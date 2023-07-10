import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index';
import { bindActionCreators } from 'redux';

const Shop = () => {
    const dispatch=useDispatch();
    const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
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
