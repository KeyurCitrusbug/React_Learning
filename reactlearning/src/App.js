import logo from './logo.svg';
import './App.css';
import React from 'react'
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
export const UserContext=React.createContext()

function App() {
  return (
    <div className="App">
        <CounterExample/>
        <ParentForm/>
        {/* <ParentComponent name={'keyur'}/> */}
    
    </div>
  );
}

export default App;
