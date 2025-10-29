import React from 'react'

type DashboardTabsProps = {
  tabs: string[]
  activeIndex: number
  onChange: (index: number) => void
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  tabs,
  activeIndex,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-20 border-b border-[#D5DDE5]">
      {tabs.map((label, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(index)}
            className={`flex items-center pb-3 text-[16px] font-normal transition-colors border-b-2 ${
              isActive
                ? 'border-[var(--primarycolor)] text-[#1F1F1F]'
                : 'border-transparent text-[#9CA3AF] hover:border-[#D5DDE5] hover:text-[#555C6A]'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default DashboardTabs
