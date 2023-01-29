import React from 'react'
import './App.css';
import useInput from './hooks/useInput'
import useFetch from './hooks/useFetch';
import useTheme from './hooks/useTheme'


function App() {
 const inp = useInput('Hello World', true)  
  
 const {data, loading, error} = useFetch('https://www.reddit.com/r/news.json')
 
const {theme, toggleTheme} = useTheme()
 
 if(loading) return 'Loadig ....'

 if(error) {
  console.log('error', error);
 }
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
      Toggle Theme
      </button>
      <form>
        <input 
        {...inp}
        />
        {inp.error && <span style={{ color: 'red'}}>{inp.error}</span>}
      </form>
      {JSON.stringify(data && data.dist)}
    </div>
  );
}

export default App;
