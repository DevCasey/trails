import React from 'react';
import './App.css';
import ButtonAppBar from './components/NavBar';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function App() {






  return (
    <div className="App">
      <ButtonAppBar />
    </div>
  );
}

app.listen(port, () => {
  console.log(`Server is on ${port}.`)
})
export default App;
