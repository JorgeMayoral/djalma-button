import { useState } from "react";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import SelectSimple from "./components/SelectSimple";
import SelectSimpleOptionGroup from "./components/SelectSimpleOptionGroup";
import Textfield from "./components/Textfield";
import SelectSimpleOption from "./components/SelectSimpleOption";
import "./styles/main.scss";

function App() {
  const [counter, setCounter] = useState(0);
  const [errorMsg, setErrorMsg] = useState({});
  const [selectValue, setSelectValue] = useState("");

  const selectOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSetError = () => {
    if (errorMsg.msg) {
      setErrorMsg({});
    } else {
      setErrorMsg({ type: "error", msg: "Some error" });
    }
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
      {/*<h1 style={{ fontSize: "5rem" }}>{counter}</h1>

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
        subtext={{ type: "help", msg: "This would be some help text" }}
        info="Info text"
      />
      <Textfield
        id="textfield2"
        label="Disabled"
        placeholder="e.g. Text"
        disabled
      />
      <ButtonPrimary label="Set Error" onClick={handleSetError} />
      <Textfield
        id="textfield3"
        label="Error"
        placeholder="e.g. Text"
        subtext={errorMsg}
      />
      <Textfield
        id="textfield4"
        label="Success"
        subtext={{ type: "success", msg: "This would be some success text" }}
        value="Success"
      />
      <Textfield
        id="textfield5"
        label="Small"
        placeholder="e.g. Text"
        subtext={{ type: "help", msg: "This would be some help text" }}
        info="Info text"
        size="small"
      />
      <Textfield
        id="textfield6"
        label="Medium"
        placeholder="e.g. Text"
        subtext={{ type: "help", msg: "This would be some help text" }}
        info="Info text"
        size="medium"
      />
      <Textfield
        id="textfield7"
        label="Large"
        placeholder="e.g. Text"
        subtext={{ type: "help", msg: "This would be some help text" }}
        info="Info text"
        size="large"
    />*/}

      <h2 style={{ fontSize: "2rem", paddingTop: "2rem" }}>Select</h2>
      <h1 style={{ fontSize: "5rem" }}>{selectValue}</h1>
      <SelectSimple
        label="Select Simple"
        options={selectOptions}
        subtext={{ type: "help", msg: "This would be some help text" }}
        value={selectValue}
        onChange={(value) => setSelectValue(value)}
      />
      <SelectSimple
        label="Select Simple Error"
        options={selectOptions}
        subtext={{ type: "error", msg: "This would be some error text" }}
      />
    </div>
  );
}

export default App;
