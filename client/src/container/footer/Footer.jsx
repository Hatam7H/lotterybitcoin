import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import {SiGmail, SiTelegram} from 'react-icons/si'
import Sign from '../../components/sign/Sign'
import './footer.css'

const Footer = () => {
  
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <footer id='register' className='bitlot__footer'>
      <h2 className='h2' data-aos="fade">Register now</h2>
      <div className='bitlot__footer-container'>
        <div className='bitlot__footer-sign'>
          <Sign/>
        </div>
        <div className='bitlot__footer-i'>
          <p>Contact us here :</p>
          <div>
            <a href="mailto:1lottrybtc@gmail.com">{<SiGmail size={28}/>}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
