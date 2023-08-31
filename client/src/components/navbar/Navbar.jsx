import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import bitcoin from '../../assets/bitcoin.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  
  return (
    <div className='bitlot__nav'>
      <img src={bitcoin} />
      <div className='bitlot__nav-link'>
        <p><a href='#timer'>CountDown</a></p>
        <p><a href="#aboutus">AboutUs</a></p>
        <p><a href='#address'>Address</a></p> 
        <p><a href='#register'>Register</a></p>
      </div>
      <div className='bitlot__sm'>
        <RiMenu3Line size={27} onClick={() => setToggleMenu(true)}/>
          {toggleMenu && (
            <div className='bitlot__nav-sm'>
              <div className='bitlot__nav-sm-logo'>
                <img src={bitcoin} />
                <RiCloseLine size={32} onClick={() => setToggleMenu(false)}/>
              </div>
              <div className='bitlot__nav-sm-link'>
                <p><a href='#timer' onClick={() => setToggleMenu(false)}>CountDown</a></p>
                <p><a href="#aboutus" onClick={() => setToggleMenu(false)}>AboutUs</a></p>
                <p><a href='#address' onClick={() => setToggleMenu(false)}>Address</a></p>
                <p><a href='#register' onClick={() => setToggleMenu(false)}>Register</a></p>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar