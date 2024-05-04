import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [toggle, settoggle] = useState(false);
  const [int, setint] = useState(null);

  const incfn = () => {
    setCount((val) => val + 1);
  };
  const startfn = () => {
    if (!toggle) {
      const IntervelId = setInterval(incfn, 1000);
      setint(IntervelId);
      settoggle(true);
    }
  };
  const pausefn = () => {
    clearInterval(int);
    settoggle(false);
  };
  const resetfn = () => {
    clearInterval(int);
    setCount(0);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        {toggle ? (
          <button style={{ background: '#FFD23F' }} onClick={pausefn}>
            Pause
          </button>
        ) : (
          <button style={{ background: '#38E54D' }} onClick={startfn}>
            Start
          </button>
        )}

        <button style={{ background: 'crimson' }} onClick={resetfn}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
