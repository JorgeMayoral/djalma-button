import Button from './components/Button';
import './styles/main.scss';

function App() {
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
      <Button label="Primary Button" />
      <Button label="Primary Button Disabled" disabled />
      <Button label="Loading Button" loading />
      <Button label="Destructive Button" destructive />
      <Button label="Destructive Button Disabled" destructive disabled />
      <Button label="Destructive Button Loading" destructive loading />
    </div>
  );
}

export default App;
