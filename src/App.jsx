/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/App.css";
import { PersonalForm, EducationForm } from "./components/Forms.jsx";
import ModeButton from "./components/ModeButtons.jsx";

function App() {
  const [formMode, setFormMode] = useState("Personal");
  const [person, setPerson] = useState({}); //Holds object with user info

  function ModeButtons() {
    const modes = ["Personal", "Education"];

    return (
      <div>
        {modes.map((mode, index) => (
          <ModeButton
            text={mode}
            onChange={() => setFormMode(mode)}
            focused={mode == formMode}
            key={index}
          />
        ))}
      </div>
    );
  }

  if (formMode == "Personal") {
    return (
      <>
        <ModeButtons />
        <PersonalForm person={person} onChange={setPerson} />
      </>
    );
  } else if (formMode == "Education") {
    return (
      <>
        <ModeButtons />
        <EducationForm person={person} onChange={setPerson} />
      </>
    );
  }
}

export default App;
