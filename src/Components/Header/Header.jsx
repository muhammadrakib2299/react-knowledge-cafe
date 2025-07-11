import React from 'react'
import './Header.css';
import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex items-center justify-between pb-4 border-b-2'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </div>
  )
}

export default Header