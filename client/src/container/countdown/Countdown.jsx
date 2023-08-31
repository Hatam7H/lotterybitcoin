import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './countdown.css'

const Countdown = () => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  const Time = () => {
    const countDate = new Date("2024-05-01T12:00:00Z").getTime();
    const now = new Date().getTime();

    const remainingTime = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime / day)
    const textHour = Math.floor((remainingTime % day) / hour)
    const textMinute = Math.floor((remainingTime % hour) / minute)
    const textSecond = Math.floor((remainingTime % minute) / second)
    
    document.querySelector(".day").innerHTML = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerHTML = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerHTML = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerHTML = textSecond > 0 ? textSecond : 0;
  }
  setInterval(Time, 500)

  return (
    <section id='timer' className='bitlot__countdown' data-aos="fade"> 
      <div className='bitlot__countdown-container'> 
        <div className='bitlot__countdown-heading'>        
          <h2>Count Down</h2>
        </div>         
        <div className='countdown'>
          <div className='container-day'>
            <h3 className='day'>Time</h3>
            <h3 className='container-countdown-heading'>Day</h3>
          </div>

          <div className='container-hour'>
            <h3 className='hour'>Time</h3>
            <h3 className='container-countdown-heading'>Hour</h3>
          </div>

          <div className='container-minute'>
            <h3 className='minute'>Time</h3>
            <h3 className='container-countdown-heading'>Minute</h3>
          </div>

          <div className='container-second'>
            <h3 className='second'>Time</h3>
            <h3 className='container-countdown-heading'>Second</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown
