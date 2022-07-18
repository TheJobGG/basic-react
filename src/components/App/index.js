import React from 'react';

import { TodoProvider } from '../../TodoContext';

import { AppUI } from './AppUI';


import './App.css';

function App() {

  return (
    <TodoProvider>
      <div id='Background-App'></div>
      <AppUI />
    </TodoProvider>
  );
}

export default App;