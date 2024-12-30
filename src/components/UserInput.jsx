/* eslint-disable react/prop-types */
import '../styles/UserInput.css'

function TextInput( { className, label }) {
    return (
        <div className = {className}>
            <label>
                {label}
                {" "}
                <input type="text" />
            </label>
        </div>
    )
}



export default TextInput;
