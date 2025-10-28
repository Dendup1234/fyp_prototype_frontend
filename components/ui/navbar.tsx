import React from 'react'

type NavbarProps = {
  userName: string
  initials: string
}

const Navbar: React.FC<NavbarProps> = ({ userName, initials }) => {
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

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-[#2f2f2f]">{userName}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#9fb4d9] to-[#5c7ab5] text-sm font-semibold text-white">
          {initials}
        </span>
        <span
          aria-hidden
          className="block h-6 w-6"
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
      </div>
    </header>
  )
}

export default Navbar
