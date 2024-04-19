/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // alterado aqui
import 'firebase/compat/auth'; // alterado aqui

// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdBzhCIhCKYhAqVN6wYor3h6r7Ut1TE9k",
  authDomain: "etecpw.firebaseapp.com",
  projectId: "etecpw",
  storageBucket: "etecpw.appspot.com",
  messagingSenderId: "363246312415",
  appId: "1:363246312415:web:9b47c6b129e995e4bb026a",
  measurementId: "G-QJ1Z6M9K0W"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      const indexArroba = email.indexOf('@')
      const nome = email.slice(0, indexArroba)
      alert(`Voce logou, parabéns ${nome}`)
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="formulario">
      <h1>Autenticação Firebase do Blk</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;