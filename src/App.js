import { useState } from "react";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import "./styles/main.scss";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>{counter}</h1>
      <div style={{ paddingBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Primary Buttons</h2>
        <ButtonPrimary label="Primary Button" onClick={handleClick} />
        <ButtonPrimary
          label="Primary Button Disabled"
          disabled
          onClick={handleClick}
        />
        <ButtonPrimary label="Loading Button" loading onClick={handleClick} />
        <ButtonPrimary
          label="Destructive Button"
          destructive
          onClick={handleClick}
        />
        <ButtonPrimary
          label="Destructive Button Disabled"
          destructive
          disabled
          onClick={handleClick}
        />
        <ButtonPrimary
          label="Destructive Button Loading"
          destructive
          loading
          onClick={handleClick}
        />
      </div>

      <div style={{ paddingBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Secondary Buttons</h2>
        <ButtonSecondary label="Primary Button" onClick={handleClick} />
        <ButtonSecondary
          label="Primary Button Disabled"
          disabled
          onClick={handleClick}
        />
        <ButtonSecondary
          label="Destructive Button"
          destructive
          onClick={handleClick}
        />
        <ButtonSecondary
          label="Destructive Button Disabled"
          destructive
          disabled
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
