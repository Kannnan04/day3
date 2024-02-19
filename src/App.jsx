import React from 'react';
import Cart from '../components/shopping'
import './App.css'
import { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.npm run dev



const App = () => {

  const [state, setState] = useState([]);



return (
    <div>

        <div className='navbar'>

              <ul>
                <li>Home</li>
                <li>About</li>
                <li>shop</li>
                <li>Contact Us</li>
              </ul>
          <button className='btn'>Cart {state.length}</button>

        </div>

        <div className='heading'>
          <p className='heading-para'> Shop in Your Own Style</p>
        </div>

      <Cart state={state} setState={setState} />  
      
    </div>
 );
}


export default App;