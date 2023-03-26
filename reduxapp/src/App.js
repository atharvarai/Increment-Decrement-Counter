import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber); // select which reducer we want to use
  const dispatch = useDispatch();
  return (
    <body className='bg-indigo-300 bg-cover h-screen'>
      <h1 className='flex items-center justify-center h-[50%] font-bold text-gray-700 text-3xl sm:text-4xl md:text-5xl'>Increment/Decrement Counter</h1>
      <h4 className='flex items-center justify-center relative bottom-12 mb-10 font-bold text-gray-700 text-3xl'>using React and Redux</h4>

      <div className='flex items-center justify-center'>
        {/* on click the - button, call the decNumber function (dispatch allow us to call it) and pass as argument how much decrease we want*/}
        <a className='p-2 text-center h-[55px] w-20 bg-violet-100 rounded-l-md font-bold text-gray-700 text-2xl  hover:bg-violet-400 scale-100 hover:scale-110 ease-in duration-500' title='Decrement' onClick={()=>dispatch(decNumber(5))}><span> - </span></a>
        <div className='container bg-violet-100 h-[55px] w-20'>
          <input className='mt-2.5 text-center h-[35px] w-20 font-bold text-gray-700 text-2xl' name='quantitiy' type='text' value={myState}/>
        </div>
        {/* on click the + button, call the incNumber function (dispatch allow us to call it) and pass as argument how much increase we want*/}
        <a className='p-2 text-center h-[55px] w-20 bg-violet-100 rounded-r-md font-bold text-gray-700 text-2xl  hover:bg-violet-400 hover:scale-110 ease-in duration-500' title='Increment' onClick={()=>dispatch(incNumber(5))}><span> + </span></a>
      </div>
    </body>
  )
}

export default App 