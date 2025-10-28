import React from 'react'
import Navbar from '@/components/ui/navbar'
import SideMenu from '@/components/ui/sidemenu'
import StatusSummary from '@/components/ui/status-summary'
import DashboardTabs from '@/components/ui/dashboard-tabs'
import DashboardSearch from '@/components/ui/dashboard-search'
import DashboardTable from '@/components/ui/dashboard-table'

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F7FBFC]">
      <SideMenu />

      <main className="flex flex-1 flex-col bg-[#E6EAEB]">
        <Navbar userName="Pradeep Pokhrel" initials="PP" />

        <section className="flex flex-1 flex-col gap-8 bg-[#F7FBFC] p-6">
          <StatusSummary />
          <DashboardTabs />
          <DashboardSearch />

          <DashboardTable />
        </section>
      </main>
    </div>
  )
}

export default DashboardPage
