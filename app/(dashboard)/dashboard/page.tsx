import React from 'react'
import Navbar from '@/components/ui/navbar'
import SideMenu from '@/components/ui/sidemenu'
import StatusSummary from '@/components/ui/status-summary'
import DashboardTabs from '@/components/ui/dashboard-tabs'

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <SideMenu />

      <main className="flex flex-1 flex-col bg-[#E6EAEB]">
        <Navbar userName="Pradeep Pokhrel" initials="PP" />

        <section className="flex flex-1 flex-col gap-8 p-6">
          <StatusSummary />
          <DashboardTabs />

          <div className="flex flex-1 items-center justify-center rounded-3xl border border-dashed border-slate-300 text-slate-400">
            hello this is tashi
          </div>
        </section>
      </main>
    </div>
  )
}

export default DashboardPage
