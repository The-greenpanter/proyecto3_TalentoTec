import { useEffect, useState } from 'react'
import './App.css'
import { UseRedux } from './components/UseRedux';

function App() {
  const [count, setCount] = useState(0)

  // useEffect se ejecuta después de cada renderizado
  useEffect(()=>{
    // Actualiza el título del documento con el count (pestaña de la página)
    document.title = `Count is ${count}`;
  }, [count]);


  return (
    <>
      <h2>React Hooks Practice</h2>
      <div className="card">
        <hr />
        <h2>Exercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
        <UseRedux/>
      </div>
    </>
  )
}

export default App
