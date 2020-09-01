import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import classes from './Components/Layout/Layout.module.css';

function App() {
  return (
    <div className={classes.Layout}>
      <Layout/>
    </div>
  );
}

export default App;
