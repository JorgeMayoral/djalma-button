import { useState } from 'react';
import Button from './components/Button';
import './styles/main.scss';

function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{fontSize: "3rem"}}>{counter}</h1>
      <Button label="Primary Button" onClick={handleClick} />
      <Button label="Primary Button Disabled" disabled />
      <Button label="Loading Button" loading />
      <Button label="Destructive Button" destructive />
      <Button label="Destructive Button Disabled" destructive disabled />
      <Button label="Destructive Button Loading" destructive loading />
    </div>
  );
}

export default App;
