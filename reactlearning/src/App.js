import logo from './logo.svg';
import './App.css';
import React,{useReducer} from 'react'
import Greet from './components/greet';
import State_Example from './components/State_Example';
import List from './components/List';
import Style from './components/Style';
import TableData from './components/TableData';
import ParentComponent from './components/ParentComponent';
import HookCount from './components/HookCount';
import HookState from './components/HookState';
import HookStateObject from './components/HookStateObject';
import BasicUseEffect from './components/BasicUseEffect';
import FetchDataEffect from './components/FetchDataEffect';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB';
import CounterExample from './components/CounterExample';
import ParentForm from './components/ParentForm';
import CounterReducer from './components/CounterReducer';
import ReducerContext from './components/ReducerContext';
import FetchDataReducer from './components/FetchDataReducer';
import CallBack from './components/CallBack';
import UseMemo from './components/UseMemo'
import {createBrowserRouter,  RouterProvider} from "react-router-dom"
import Header from './components/Header';
export const UserContext=React.createContext()
export const CounterContext=React.createContext()
const intitialState=0
const reducer=(state,action)=>{
  switch(action.type)
  {
      case 'increment':
          return state+1
      case 'decrement':
          return state-1
      case 'reset':
          return intitialState
      default:
          return state
  }
}
function App() 
{
  const router=createBrowserRouter([
    {
      path:"/counter",
      element:<CounterExample/>
    },
    {
      path:"/",
      element:<Header/>
    }
  ])
  const [count,dispatch]=useReducer(reducer,intitialState)
  return (
    <div className="App">
        
        <RouterProvider router={router}>
          <Header/>
        </RouterProvider>
        {/* <Header/> */}
    </div>
  );
}

export default App;
