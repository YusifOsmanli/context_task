import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import MainContext from '../context'
import Basket from './../Pages/Basket';
const Header = () => {
  const {inputValue, setInputValue, setSearch} = useContext(MainContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b className='bold'>Supro.</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='list'>
              <li>
                <Link className='link' to=''>Home</Link>
              </li>
              <li>
                <Link className='link' to='favorites'>Favorites</Link>
              </li>
              <li>
                <Link className='link' to='/basket'>Basket</Link>
              </li>
            </ul>
          </div>
          <div className='input'>
            <input className='searchInp' type='text' placeholder='Search product' value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSearch(e.target.value);
              }} />
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header