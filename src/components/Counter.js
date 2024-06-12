import React from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {decrement,increment} from '../store/counterSlice';

export function Counter(){

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch()


    //callback function  ex- setTimeout(function (){},5000)
    function x(y){

    }
    x(function y(){

    })

    //closure
    function x(){
      var a=7;
          function y(){
              console.log(a);
          }
          y();
      }
      x();

    return (
        <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={()=>dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={()=>dispatch(decrement())}
          >
            Decrement
          </button>
        </div>

        <button onClick={()=>x()}>function call</button>
      </div>
    )
}