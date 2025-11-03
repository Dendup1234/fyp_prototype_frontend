'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type NavbarProps = {
  userName: string
  initials: string
  onLogout?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ userName, initials, onLogout }) => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => setMenuOpen((prev) => !prev)
  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    } else {
      router.push('/signin')
    }
    setMenuOpen(false)
  }

  return (
    <header className="flex h-16 items-center justify-end gap-6 bg-[#F7FBFC] px-10 text-[#555c6a] shadow-sm shadow-[#A7C2DF]/40">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#555c6a] shadow-sm"
        aria-label="Notifications"
      >
        <span
          aria-hidden
          className="block h-6 w-6"
          style={{
            backgroundColor: '#769FCD',
            maskImage: 'url(/icons/navbar/notification.svg)',
            WebkitMaskImage: 'url(/icons/navbar/notification.svg)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
          }}
        />
      </button>

      <div className="relative flex items-center gap-4">
        <span className="text-sm font-medium text-[#2f2f2f]">{userName}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#9fb4d9] to-[#5c7ab5] text-sm font-semibold text-white">
          {initials}
        </span>
        <button
          type="button"
          onClick={handleToggle}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#555c6a] shadow-sm transition hover:bg-[#EEF4FC]"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-label="Open user menu"
        >
          <span
            aria-hidden
            className={`block h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
            style={{
              backgroundColor: '#769FCD',
              maskImage: 'url(/icons/navbar/chevron.svg)',
              WebkitMaskImage: 'url(/icons/navbar/chevron.svg)',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }}
          />
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-12 w-40 rounded-xl border border-[#B9D7EA] bg-white p-2 text-sm text-[#2f2f2f] shadow-lg shadow-[#A7C2DF]/40">
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[#F7FBFC]"
            >
              Logout
              <span aria-hidden className="text-[#9CA3AF]">↘</span>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
