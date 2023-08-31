import { useState, useEffect } from 'react'
import Forminput from '../forminput/Forminput'
import Check from '../../assets/check.png'
import Axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './sign.css'


const Sign = () => {
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])

  const [toggleMenu, setToggleMenu] = useState(false)


  const [values, setValues] = useState({
    username: "",
    email: "",
    wallet: "",
    txhash: "",
  });
  const url = "https://1lotterybitcoin.com/submit.php"
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMassage: "Username should be 3-16 characters and shouldn't include any special caracter!",
      label: "UserName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMassage: "Please enter valid Email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "wallet",
      type: "text",
      placeholder: "Wallet Address",
      errorMassage: "Please enter valid wallet address",
      label: "Wallet Address",
      required: true,
    },
    {
      id: 4,
      name: "txhash",
      type: "text",
      placeholder: "TX hash",
      errorMassage: "Please enter valid txhash",
      label: "TX hash",
      required: true,
    },
  ]

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post(url, {
      username: values.username,
      email: values.email,
      wallet: values.wallet,
      txhash: values.txhash
    })
      .then(res => {
        if (res.status == 200){
          console.log(res.values)
        }else{
          console.log(res.data)
        }
      })    
    setToggleMenu(true);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className='bitlot__sign' data-aos="fade">
      <form onSubmit={(e) => handleSubmit(e)}>      
        <h2>Sign Up</h2>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>        
      {toggleMenu && (
        <div className='confirm-form'>            
          <h3>Your All Done</h3>
          <img src={Check}/>
          <p>
            Imagine the excitement that fills the air as you find yourself {values.username} signing up for a lottery, dear {values.username}. With anticipation in your heart and hope in your eyes, you take a leap of faith, embracing the possibility of a life-changing moment. As you put your name down, you join countless others who yearn for that exhilarating shot at destiny.
          </p>
          <button className='confirm-button' onClick={() => setToggleMenu(false)}>Done</button>
        </div>
      )}
    </div>
  )
}

export default Sign