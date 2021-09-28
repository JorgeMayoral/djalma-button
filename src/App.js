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
      <div style={{paddingBottom: "3rem"}}>
        <h2 style={{fontSize: "1.5rem"}}>Primary Buttons</h2>
        <Button label="Primary Button" onClick={handleClick} />
        <Button label="Primary Button Disabled" disabled onClick={handleClick} />
        <Button label="Loading Button" loading onClick={handleClick} />
        <Button label="Destructive Button" destructive onClick={handleClick} />
        <Button label="Destructive Button Disabled" destructive disabled onClick={handleClick} />
        <Button label="Destructive Button Loading" destructive loading onClick={handleClick} />
      </div>
      
      <div style={{paddingBottom: "3rem"}}>
        <h2 style={{fontSize: "1.5rem"}}>Secondary Buttons</h2>
        <Button label="Primary Button" type="secondary" onClick={handleClick} />
        <Button label="Primary Button Disabled" disabled type="secondary" onClick={handleClick} />
        <Button label="Destructive Button" destructive type="secondary" onClick={handleClick} />
        <Button label="Destructive Button Disabled" destructive disabled type="secondary" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
