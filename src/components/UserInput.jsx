/* eslint-disable react/prop-types */
import "../styles/UserInput.css";

function TextInput({ person, className, label, onChange }) {
  return (
    <div className={className}>
      <label>
        {label}{" "}
        <input
          value={person[className]}
          type="text"
          onChange={(e) => onChange({ ...person, [className]: e.target.value })}
        />
      </label>
    </div>
  );
}

export default TextInput;
