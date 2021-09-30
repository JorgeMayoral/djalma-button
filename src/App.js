import { useState } from "react";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import Textfield from "./components/Textfield";
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
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "5rem" }}>{counter}</h1>

      <h2 style={{ fontSize: "2rem" }}>Primary Buttons</h2>
      <ButtonPrimary label="Button" onClick={handleClick} />
      <ButtonPrimary label="Button Disabled" disabled onClick={handleClick} />
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

      <h2 style={{ fontSize: "2rem", paddingTop: "2rem" }}>
        Secondary Buttons
      </h2>
      <ButtonSecondary label="Button" onClick={handleClick} />
      <ButtonSecondary label="Button Disabled" disabled onClick={handleClick} />
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

      <h2 style={{ fontSize: "2rem", paddingTop: "2rem" }}>Textfield</h2>
      <Textfield
        id="textfield1"
        label="Label"
        placeholder="e.g. Text"
        helpText="This would be some help text"
        info
      />
      <Textfield
        id="textfield1"
        label="Disabled"
        placeholder="e.g. Text"
        disabled
      />
      <Textfield
        id="textfield1"
        label="Error"
        placeholder="e.g. Text"
        errorText="This would be some error text"
      />
      <Textfield
        id="textfield1"
        label="Success"
        successText="This would be some success text"
        value="Success"
      />
    </div>
  );
}

export default App;
