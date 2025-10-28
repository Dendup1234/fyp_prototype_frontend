import React from 'react'

const tabs = [
  'Total Applications',
  'Pending Reviews',
  'Accepted',
  'Rejected',
]

const DashboardTabs = () => {
  const activeIndex = 0

  return (
    <div className="flex flex-wrap gap-20 border-b border-[#D5DDE5]">
      {tabs.map((label, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={label}
            type="button"
            className={`flex flex-col items-center pb-2 text-[16px] font-normal transition-colors ${
              isActive ? 'text-[#1F1F1F]' : 'text-[#9CA3AF]'
            }`}
          >
            <span>{label}</span>
            <span
              className="mt-2 h-[3px] w-full rounded-full"
              style={{
                backgroundColor: isActive ? 'var(--primarycolor)' : 'transparent',
              }}
            />
          </button>
        )
      })}
    </div>
  )
}

export default DashboardTabs
