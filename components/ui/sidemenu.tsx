import React from 'react'

export type MenuItem = {
  label: string
  iconType: 'material' | 'svg'
  icon: string
  active?: boolean
}

const defaultMenuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    iconType: 'material',
    icon: 'dashboard',
    active: true,
  },
  {
    label: 'Student List',
    iconType: 'svg',
    icon: '/icons/sidebar/student-list.svg',
    active: false,
  },
  {
    label: 'Documents',
    iconType: 'svg',
    icon: '/icons/sidebar/document.svg',
    active: false,
  },
]

const iconColor = {
  active: '#769FCD',
  inactive: '#B9D7EA',
}

const renderIcon = (item: MenuItem, isActive: boolean) => {
  const color = isActive ? iconColor.active : iconColor.inactive

  if (item.iconType === 'material') {
    return (
      <span
        className="material-symbols-outlined text-2xl"
        style={{ color }}
        aria-hidden
      >
        {item.icon}
      </span>
    )
  }

  return (
    <span
      aria-hidden
      className="block h-6 w-6"
      style={{
        backgroundColor: color,
        maskImage: `url(${item.icon})`,
        WebkitMaskImage: `url(${item.icon})`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    />
  )
}

type SideMenuProps = {
  items?: MenuItem[]
}

const SideMenu: React.FC<SideMenuProps> = ({ items = defaultMenuItems }) => {
  return (
    <aside className="flex w-64 flex-col gap-10 bg-white px-6 py-8 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M6 9a6 6 0 0 1 12 0v4a3 3 0 0 0 3 3" />
            <path d="M6 9a6 6 0 0 0-3 5.196V17a2 2 0 0 0 2 2h2" />
            <path d="M18 9a6 6 0 0 1 3 5.196V17a2 2 0 0 1-2 2h-2" />
            <path d="M8 21a4 4 0 0 1 8 0" />
          </svg>
        </div>
        <div className="text-lg font-semibold tracking-wide text-slate-800">
          GLoBaL
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {items.map((item) => {
          const isActive = Boolean(item.active)

          return (
            <button
              key={item.label}
              className={`flex h-11 items-center gap-4 rounded-[10px] px-4 text-left text-base font-normal transition-colors ${
                isActive
                  ? 'bg-slate-100 text-slate-800'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`}
              type="button"
            >
              {renderIcon(item, isActive)}
              <span className="text-[16px] font-normal leading-5">
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default SideMenu
