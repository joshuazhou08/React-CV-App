/* eslint-disable react/prop-types */
import "../styles/ModeButton.css";

let jobs = 1;
function ModeButton({ text, onChange, focused }) {
  if (focused) {
    return (
      <button onClick={() => onChange()} className="focused">
        {text}
      </button>
    );
  } else {
    return <button onClick={() => onChange()}>{text}</button>;
  }
}

function RemoveJobButton({ person, onChange, id }) {
  function handleClick() {
    delete person.jobs[id];
    onChange({ ...person });
  }
  return <button onClick={handleClick}>Remove Job</button>;
}

function AddJobButton({ person, onChange }) {
  function handleClick() {
    person.jobs[jobs] = {
      "job-title": "Job Title",
      company: "Company",
      "job-start-date": "Start Date",
      "job-end-date": "End Date",
      description: "Description",
    };
    onChange({ ...person });
    jobs++;
  }
  return <button onClick={handleClick}>Add Job</button>;
}

export default ModeButton;
export { RemoveJobButton, AddJobButton };
