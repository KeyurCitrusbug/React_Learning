import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import State_Example from './components/State_Example';
import List from './components/List';
import Style from './components/Style';
import TableData from './components/TableData';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
        {/* <Greet name="Keyur" >
          <p>This will be the Children element</p>
        </Greet>
        <Greet name="Michael">
          <button type='button'>Click Here</button>
        </Greet> */}
        <h5>Example of Change State</h5>
        <State_Example/>
        <h5>Example Using Fragment</h5>
        {<TableData/>}
        <h5>Example Using Map and Using other component to render data </h5>
        {<TableData/>}
        <h5>Example of Styling using Props</h5>
        <Style displayInBlue={true}/>
        {/* <List/> */}
        
        
        {/* <ParentComponent name={'keyur'}/> */}
    
    </div>
  );
}

export default App;
