import React from 'react';

import ToDo from './components/todo/todo.js';
import SettingtProvider from './context/setting/context';
import ListProvider from './context/setting/listContext';



function App() {
  return (
    <div>
      <SettingtProvider>
        <ListProvider>
          <ToDo />
        </ListProvider>
      </SettingtProvider>

    </div>
  )
}

export default App



