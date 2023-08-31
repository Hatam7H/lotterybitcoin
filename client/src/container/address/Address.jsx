import {useEffect} from 'react'
import Copy from '../../components/copy/Copy'
import QR1 from '../../assets/QR1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './address.css'

const Address = () => {
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div id='address' className='bitlot__address' data-aos="fade">
      <h2>Wallet Address</h2>
      <h3>For joining the contest, send us 1 USDT or 15 TRX</h3>
      <div className='bitlot__address-link' data-aos="fade">
        <div>
          <Copy inputVal="TEPYhqcnQkGGopQFgTNKHEAUXNN14kcoKm" />
        </div>          
        <img src={QR1} alt="QR Code" />
      </div>
    </div>
  )
}

export default Address
