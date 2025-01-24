'use client'

import React, { useState } from 'react'
import MobileMenuButton from './MobileMenuButton'
import MobileDrawer from './MobileDrawer'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div>
      <MobileMenuButton onClick={handleDrawerToggle} isOpen={isDrawerOpen} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
    </div>
  )
}
