/* #region 0.librerias */
/* #region plantilla */
/* #endregion */
import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
/* #endregion */

function App() {
  /* #region 1.parametros y funciones */
  const [count, setCount] = useState(0)
  /* #endregion */
  return (
    <div className="body">

      <NavBar/>
      
      <ItemListContainer text="Bienvenidos!!"/>

    </div>
  )
}

export default App
/* #region comentarios */
// 1.box1 - u.r, u.a, f-f
// {/* 1.1.item1 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.box1.2 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.1.item2 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.2.item3 - u.r, u.a, f-f, t.cnt, cnt */}
// {/* 1.2.item4 - u.r, u.a, f-f, t.cnt, cnt */}

/* #endregion */

/* #region desactualizado */

//import reactLogo from '/react.svg'
//import './App.css'
//u.r, u.a, f-f, t.cnt, cnt
    // <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>

    // <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count} </button>

    // <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR </p>

    // <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more </p>


/* #endregion */
