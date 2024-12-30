import TextInput from './UserInput.jsx';
import '../styles/Forms.css'

function PersonalForm() {
    return (
        <div className = "wrapper">
            <h1> Personal </h1>
            <div className = "personal-form-wrapper form-wrapper">
                <TextInput className = "first-name" label = "First Name:"/>
                <TextInput className = "last-name" label = "Last Name:"/>
                <TextInput className = "email" label = "Email:"/>
                <TextInput className = "phone-number" label = "Phone Number:"/>
                <TextInput className = "linkedIn" label = "LinkedIn:"/>
                <button className = "submit-button"> Submit </button>
            </div>
        </div>
    )
}

function EducationForm() {
    return (
        <div className = "wrapper" >
            <h1> Education </h1>
            <div className = "form-wrapper">
                <TextInput className = "school" label = "School:"/>
                <TextInput className = "major" label = "Major:"/>
                <TextInput className = "start date" label = "Start Date:"/>
                <TextInput className = "end date" label = "End Date:"/>
                <button className = "submit-button"> Submit </button>
            </div>
        </div>
    )
}


export { PersonalForm, EducationForm };