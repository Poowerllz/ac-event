'use client'
import { IconButton } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <IconButton onClick={toggleMenu} className="bg-transparent border-none">
      <FaBars size={24} />
    </IconButton>
  )
}

export default MenuButton
