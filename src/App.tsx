import React, { useEffect} from 'react';

import NavBar from './components/layout/NavbBar';
import TodoAdd from './components/TodoAdd/TodoAdd';

function App() {

  return (
    <div>
      <React.Fragment>
            <NavBar/>
           <TodoAdd />
      </React.Fragment>
    </div>
  );
}

export default App;
