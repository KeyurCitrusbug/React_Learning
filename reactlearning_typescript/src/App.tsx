import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Props } from './components/Props';
import { Parent } from './components/Parent';
import { Child } from './components/Child';
import { Input } from './components/Input';
import { UseStateExample } from './components/useStateExample';
function App() 
{
  const personName={
    firstName:'Keyur',
    lastName:'Trivedi',
  }
  const personList=[
    {
      firstName:'Keyur',
      lastName:'Trivedi',
    },
    {
      firstName:'ABC',
      lastName:'XYZ',
    },
    {
      firstName:'XYZ',
      lastName:'ABC',
    },
  ]
  return (
    <div className="App">
      <Props name='Keyur' unReadMessage={5} fullName={personName} extraNames={personList}/>
      <Parent> 
          <Child>Message Displayed Using</Child>
      </Parent>
      <Input TextChangeEvent={(event)=>console.log(event)}/>
      <p>Use State Example:-</p>
      <UseStateExample/>
    </div>
  );
}

export default App;
