/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/App.css";
import {
  PersonalForm,
  EducationForm,
  ExperienceForm,
} from "./components/Forms.jsx";
import ModeButton, { AddJobButton } from "./components/Buttons.jsx";
import Resume from "./components/Resume.jsx";
import Person from "./components/Person.js";

function App() {
  const [formMode, setFormMode] = useState("Personal");
  const [person, setPerson] = useState(Person); //Holds object with user info

  function ModeButtons() {
    const modes = ["Personal", "Education", "Work Experience", "Resume"];

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
  } else if (formMode == "Work Experience") {
    let count = 1;
    const jobForms = Object.keys(person.jobs).map((key) => (
      <>
        <h1> Job {count++}</h1>
        <ExperienceForm
          person={person}
          onChange={setPerson}
          id={key}
          key={key}
        />
      </>
    ));

    return (
      <>
        <ModeButtons />
        {jobForms}
        <AddJobButton person={person} onChange={setPerson} />
      </>
    );
  } else if (formMode == "Resume") {
    return (
      <>
        <ModeButtons />
        <Resume person={person} />
      </>
    );
  }
}

export default App;
