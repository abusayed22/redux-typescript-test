import React from 'react';

function App() {
  return (
    <div>
        <div className='w-[450px]  h-[400px] outline-none border border-orange-500 mx-auto my-[100px]'>
          <input type="text" className='w-[380px] outline-none hover:outline-blue-400 h-32 bg-yellow-200 mx-8 my-5 p-5 text-blue-900 text-4xl font-bold text-center'/>
          <button className='w-[380px] h-10 bg-green-200 mx-8 my-5'>Deposit</button>
          <button className='w-[380px] h-10 bg-red-200 mx-8'>Withdrow</button>
          <button className='w-[380px] h-10 bg-orange-200 mx-8 my-5'>Bankrupt</button>
        </div>
    </div>
  );
}

export default App;
