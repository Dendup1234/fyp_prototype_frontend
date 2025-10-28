import React from 'react'

type StatusCard = {
  label: string
  value: number
  icon: string
  background: string
  accent: string
  labelColor: string
}

const cards: StatusCard[] = [
  {
    label: 'Total Application',
    value: 128,
    icon: '/icons/visa-officer-cards/total-application.svg',
    background: '#F4F8FF',
    accent: '#A7C2DF',
    labelColor: '#B8BEC7',
  },
  {
    label: 'Pending Review',
    value: 37,
    icon: '/icons/visa-officer-cards/pending.svg',
    background: '#FFF7D6',
    accent: '#A7C2DF',
    labelColor: '#B8BEC7',
  },
  {
    label: 'Accepted',
    value: 54,
    icon: '/icons/visa-officer-cards/accepted.svg',
    background: '#E3FFEB',
    accent: '#A7C2DF',
    labelColor: '#B8BEC7',
  },
  {
    label: 'Incomplete',
    value: 21,
    icon: '/icons/visa-officer-cards/incomplete.svg',
    background: '#FFE3E8',
    accent: '#A7C2DF',
    labelColor: '#B8BEC7',
  },
]

type StatusSummaryProps = {
  items?: StatusCard[]
}

const StatusSummary: React.FC<StatusSummaryProps> = ({ items = cards }) => {
  return (
    <div className="flex flex-wrap gap-4 md:flex-nowrap md:justify-between">
      {items.map((card) => (
        <div
          key={card.label}
          className="flex h-[185px] w-full max-w-[200px] flex-col justify-between rounded-[24px] p-6 md:w-[200px]"
          style={{ backgroundColor: card.background }}
        >
          <span
            className="block h-10 w-10"
            style={{
              backgroundColor: 'var(--secondarycolor)',
              maskImage: `url(${card.icon})`,
              WebkitMaskImage: `url(${card.icon})`,
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }}
            aria-hidden
          />

          <div className="flex flex-col gap-3 text-left">
            <span className="text-[32px] font-semibold text-[#2F2F2F] leading-tight tabular-nums">
              {card.value}
            </span>
            <span
              className="text-[16px] font-normal leading-tight"
              style={{ color: card.labelColor }}
            >
              {card.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatusSummary
