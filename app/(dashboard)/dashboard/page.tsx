'use client'

import React, { useState } from 'react'
import Navbar from '@/components/ui/navbar'
import StatusSummary from '@/components/ui/status-summary'
import DashboardTabs from '@/components/ui/dashboard-tabs'
import DashboardSearch from '@/components/ui/dashboard-search'
import DashboardTable from '@/components/ui/dashboard-table'

const tabOptions = [
  'Total Applications',
  'Pending Reviews',
  'Accepted',
  'Rejected',
]

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [query, setQuery] = useState('')   // 👈 add this

  return (
    <div className="flex min-h-screen bg-[#F7FBFC]">
      <main className="flex flex-1 flex-col bg-[#E6EAEB]">
        <Navbar userName="Pradeep Pokhrel" initials="PP" />

        <section className="flex flex-1 flex-col gap-8 bg-[#F7FBFC] p-6">
          <StatusSummary />

          <DashboardTabs
            tabs={tabOptions}
            activeIndex={activeTab}
            onChange={setActiveTab}
          />

          {/* make search actually send text up */}
          <DashboardSearch onSearch={(val: string) => setQuery(val)} />

          {/* pass query down to the table */}
          <DashboardTable activeTab={activeTab} query={query} />
        </section>
      </main>
    </div>
  )
}

export default DashboardPage
