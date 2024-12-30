/* eslint-disable react/prop-types */
import { useState } from 'react'
import './styles/App.css'
import { PersonalForm, EducationForm } from './components/Forms.jsx'
import ModeButton from './components/ModeButtons.jsx'

const modes = ["Personal", "Education"]

function App() {
  const [formMode, setFormMode] = useState('Personal');

  function ModeButtons() {
    return ( 
      <div>
        {modes.map((mode, index) => (
          <ModeButton 
          text = {mode} 
          onChange = {() => setFormMode(mode)} 
          focused = {mode == formMode} 
          key = {index}/>
        ))}
      </div>
    )
  }

  if (formMode == 'Personal') {
    return (
      <>
        <ModeButtons />
        <PersonalForm />
      </>
    )
  } else if (formMode == 'Education') {
    return (
      <>
        <ModeButtons />
        <EducationForm />
      </>
    )
  }
}

export default App;
