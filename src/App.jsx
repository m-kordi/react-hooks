import React from 'react'
import Xusestate from './components/usestate/Xusestate';
import Xuseeffect from './components/useeffect/Xuseeffect';
import Xuseref from './components/useref/Xuseref';
import Xusereducer from './components/userducer/Xusereducer';

function App() {  
  return (
    <>
    {/*[1]- useState */}
    <Xusestate/>
    <br />
    <h1>******************************************************************************</h1>

    {/*[2]- useEffect */}
    <Xuseeffect/>
    <br />
    <h1>******************************************************************************</h1>

    {/* [3]- useRef */}
    <Xuseref/>
    <br />
    <h1>******************************************************************************</h1>

    {/* [4]- useReducer */}
    <Xusereducer/>
    <br />
    <h1>******************************************************************************</h1>

    </>
    
  )
}

export default App