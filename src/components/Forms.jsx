/* eslint-disable react/prop-types */
import TextInput from "./UserInput.jsx";
import "../styles/Forms.css";

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
        <button className="submit-button"> Submit </button>
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
          className="start date"
          label="Start Date:"
        />
        <TextInput
          person={person}
          onChange={onChange}
          className="end date"
          label="End Date:"
        />
        <button className="submit-button"> Submit </button>
      </div>
    </div>
  );
}

export { PersonalForm, EducationForm };
