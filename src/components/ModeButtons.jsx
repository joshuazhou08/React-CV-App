/* eslint-disable react/prop-types */
import '../styles/ModeButton.css'
function ModeButton( { text, onChange, focused } ) {
    if (focused) {
        return (
            <button onClick= {() => onChange()} className = "focused"> 
            {text}
            </button>
        )
    } else {
        return (
            <button onClick= {() => onChange()}> 
            {text}
            </button>
        )
    }

}

export default ModeButton;