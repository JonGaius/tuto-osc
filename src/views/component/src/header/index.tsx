import React, { useState } from 'react'
import images from '../../../../assets/images'
import { NavLink } from 'react-router-dom'
import { links } from '../../../../routes'
import Button from '../button/Button'
import {Menu} from "iconsax-react"
function Header() {
  const {image1} = images
  const [openNav, setOpenNav] = useState<boolean>(false)
  return (
    <header className='tt-header'>
      <div className='tt-header__logo tt-header-logo'>
        <img src={image1} alt="logo" />
      </div>
      <div className={`tt-heeader__navigation tt-header-navigation ${openNav ? "is--active" : ""}`}>
        <ul className='tt-header-navigation__list'>
          <li className='tt-header-navigation__item'>
            <NavLink to={links.home} end>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li className='tt-header-navigation__item'>
            <NavLink to={links.about} end>
              <span>A propos de nous</span>
            </NavLink>
          </li>
          <li className='tt-header-navigation__item'>
            <NavLink to={links.contact} end>
              <span>Contacts</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='tt-header__action tt-header-action'>
        <Button 
          typo={'button'} 
          mstyle={'primary'} 
          label={'Get in Touch'} 
          onClick={() => {}}
        />
      </div>
      <div className='tt-header-burger'>
        <button type='button' onClick={() => setOpenNav(!openNav)}>
          <Menu size="32" color="#0b0b0bff"/>
        </button>
      </div>
    </header>
  )
}

export default Header