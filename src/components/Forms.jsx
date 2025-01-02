/* eslint-disable react/prop-types */
import TextInput from "./UserInput.jsx";
import "../styles/Forms.css";
import { RemoveJobButton } from "./Buttons.jsx";
function PersonalForm({ person, onChange }) {
  return (
    <div className="wrapper">
      <h1> Personal </h1>
      <div className="personal-form-wrapper form-wrapper">
        <TextInput
          person={person}
          className="first-name"
          label="First Name:"
          onChange={onChange}
        />
        <TextInput
          person={person}
          className="last-name"
          label="Last Name:"
          onChange={onChange}
        />
        <TextInput
          person={person}
          className="email"
          label="Email:"
          onChange={onChange}
        />
        <TextInput
          person={person}
          className="phone-number"
          label="Phone Number:"
          onChange={onChange}
        />
        <TextInput
          person={person}
          className="linkedIn"
          label="LinkedIn Profile:"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

function EducationForm({ person, onChange }) {
  return (
    <div className="wrapper">
      <h1> Education </h1>
      <div className="form-wrapper">
        <TextInput
          person={person}
          onChange={onChange}
          className="school"
          label="School:"
        />
        <TextInput
          person={person}
          onChange={onChange}
          className="major"
          label="Major:"
        />
        <TextInput
          person={person}
          onChange={onChange}
          className="ed-start-date"
          label="Start Date:"
        />
        <TextInput
          person={person}
          onChange={onChange}
          className="ed-end-date"
          label="End Date:"
        />
        <TextInput
          person={person}
          onChange={onChange}
          className="skills"
          label="Skills:"
        />
      </div>
    </div>
  );
}
function JobTextInput({ person, onChange, id, className, label }) {
  return (
    <div className={className}>
      <label>
        {label}{" "}
        <input
          value={person.jobs[id][className]}
          type="text"
          onChange={(e) => {
            person.jobs[id] = {
              ...person.jobs[id],
              [className]: e.target.value,
            };
            onChange({
              ...person,
            });
          }}
        />
      </label>
    </div>
  );
}

function JobTextBox({ person, onChange, id, className, label }) {
  return (
    <div className={className}>
      <label>
        {label}{" "}
        <textarea
          value={person.jobs[id][className]}
          onChange={(e) =>
            onChange({
              ...person,
              jobs: { ...person.jobs[id], [className]: e.target.value },
            })
          }
        />
      </label>
    </div>
  );
}
function ExperienceForm({ person, onChange, id }) {
  return (
    <>
      <div className="form-wrapper">
        <JobTextInput
          person={person}
          onChange={onChange}
          className="job-title"
          label="Job Title:"
          id={id}
        />
        <JobTextInput
          person={person}
          onChange={onChange}
          className="company"
          label="Company:"
          id={id}
        />
        <JobTextInput
          person={person}
          onChange={onChange}
          className="job-start-date"
          label="Start Date:"
          id={id}
        />
        <JobTextInput
          person={person}
          onChange={onChange}
          className="job-end-date"
          label="End Date:"
          id={id}
        />
        <JobTextBox
          person={person}
          onChange={onChange}
          className="description"
          label="Description:"
          id={id}
        />
      </div>
      <RemoveJobButton person={person} onChange={onChange} id={id} />
    </>
  );
}

export { PersonalForm, EducationForm, ExperienceForm };
