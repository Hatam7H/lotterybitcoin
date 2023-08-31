import { useState } from 'react'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import './copy.css'

const Copy = ({inputVal}) => {
  const [copied, setCopied] = useState(false)
  const CopyToClipboard = () => {
    setCopied(true)
    navigator.clipboard.writeText(inputVal)
  }

  return (
    <div className='copy-link'>
      <h4>USDT-TRX</h4>
      <div className='copy__input'>
        <input className='copy-text' value={inputVal} readOnly/>
        <button onClick={CopyToClipboard}><HiOutlineClipboardCopy size={24}/></button>
      </div>
    </div>
  )
}

export default Copy
