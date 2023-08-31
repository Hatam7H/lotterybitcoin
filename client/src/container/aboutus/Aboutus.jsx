import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './aboutus.css'

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  return (
    <div id='aboutus' className='bitlot__aboutus'>
      <h2 data-aos="fade">About Us</h2>
      <div className='bitlot__aboutus-container' data-aos="fade">
        <div className='bitlot__aboutus-box'>
          <h3>How to register</h3>
          <p>
            To participate in the contest, you need to make a one-dollar transaction to our wallet,
            after that you must send us your email address, 
            your bitcoin wallet address, and the transfer code of the transaction.
          </p>
        </div>
        <div className='bitlot__aboutus-box'>
          <h3>How we choose</h3>
          <p>
          We automatically select one of the wallets that have completed the transaction and registered,
          and then transfer bitcoins to his wallet.
          </p>
        </div>
        <div className='bitlot__aboutus-box'>
          <h3>How the winner gets bitcoin</h3>
          <p>
            After we chose the winner,
            we message him/her and then deposit the bitcoins into his/her wallet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
