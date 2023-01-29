import React from 'react'
import './App.css';
import useInput from './hooks/useInput'

function App() {
 const inp = useInput('Hello World', true)  
  
  return (
    <div className="App">
      <form>
        <input 
        {...inp}
        />
        {inp.error && <span style={{ color: 'red'}}>{inp.error}</span>}
      </form>
    </div>
  );
}

export default App;
