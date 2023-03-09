import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5297/weatherforecast')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return (
    <div>
      <h1>Data from .NET Core backend:</h1>
      <ul>
        {data.map(item => (
          <li key={item.date}>{item.summary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
