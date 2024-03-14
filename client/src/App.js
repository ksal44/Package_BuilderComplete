import React, { useEffect } from 'react';
import './App.css';
import PackagePage from './packagePage';
// import { buildBronzePackage, buildSilverPackage, buildGoldPackage } from './functions';

function App() {
  useEffect(() => {
    fetch('/api/myfunction')
      .then(response => response.text())
      .then(message => {
        console.log(message, "app is Listening!!!!!");



      });
  }, []);

  return (
    <div>
      <PackagePage />
    </div>
  );
}

export default App;

