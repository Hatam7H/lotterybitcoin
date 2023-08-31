import './header.css'
import Bitcoin from '../../assets/Bitcoin.gif'

const Header = () => {
  return (
    <div className='bitlot__header'>
      <div className='bitlot__header-info'>
        <h1>
          <span>Lottery </span>
          <span> Bitcoin  </span>
          <span>Luck </span>
        </h1>
        <p>Try the chance of wining a bitcoin for one dollar</p>
      </div>
      <div className='bitlot__header-img'>
        <img src={Bitcoin} alt="bitcoin"/>
      </div>
    </div>
  )
}

export default Header
