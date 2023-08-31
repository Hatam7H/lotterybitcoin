import { useState } from 'react';
import './forminput.css'

const Forminput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMassage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='bitlot__formInput'>
      <label>{label}</label>
      <input 
        {...inputProps}
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()}
      />
      <span>{errorMassage}</span>
    </div>
  )
}

export default Forminput
