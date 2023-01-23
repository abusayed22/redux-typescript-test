import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from './redux/store';
import { useAppSelector,useAppDispatch } from './hooks/reduxHooks';
import { depositMoney } from './redux/bank/action';

function App() {
  const [input,setInput] = useState(null);

  const amount = useAppSelector(state=> state.bank);
  const dispatch = useAppDispatch()

  //all hanler here
  
  return (
    <div>
        <div className='w-[450px]  h-[400px] outline-none border border-orange-500 mx-auto my-[100px]'>
      <h1>{amount}</h1>
          <input type="text"  className='w-[380px] outline-none hover:outline-blue-400 h-32 bg-yellow-100 mx-8 my-5 p-5 text-blue-900 text-4xl font-bold text-center'/>
          
          <button onClick={() => } className='w-[380px] h-10 bg-green-200 border border-green-500 mx-8 my-5'>Deposit</button>
          <button className='w-[380px] h-10 bg-red-200 border border-red-500 mx-8'>Withdrow</button>
          <button className='w-[380px] h-10 bg-orange-200 border border-orange-500 mx-8 my-5'>Bankrupt</button>
        
        </div>
    </div>
  );
}

export default App;
