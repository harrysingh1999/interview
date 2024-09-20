import { useState } from "react";
import Assignment from "./Components/Assignment";

function App() {
  const [value, setValue] = useState({
    text: "",
    text2: "",
    text3: "",
  });

  const onChange = (e, title) => {
    if (title === "text") {
      setValue((prevState) => ({ ...prevState, text: e.target.value }));
    } else if (title === "text2") {
      setValue((prevState) => ({ ...prevState, text2: e.target.value }));
    } else if (title === "text3") {
      setValue((prevState) => ({ ...prevState, text3: e.target.value }));
    }
  };

  return (
    <>
      <Assignment title="text" value={value.text} onChange={onChange} />
      {/* <Assignment title="text2" value={value.text2} onChange={onChange} />
      <Assignment title="text3" value={value.text3} onChange={onChange} /> */}
    </>
  );
}

export default App;
