import React from 'react'
import { ButtonOutline, LargeTitle } from '../designsystem/atoms'
import BateoLogo from "../assets/bateo-logo.png";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className=' flex justify-between items-center w-full h-20 px-4'>
        {/* Logo */}
        <img src={BateoLogo} className='w-16 h-16' alt='bateo logo' />
        {/* Title */}
        <LargeTitle>Periodic Table Of Elements</LargeTitle>
        {/* invert button */}
        <ButtonOutline>Invert</ButtonOutline>
    </header>
  )
}

export default Header