import React from 'react'

type VisaStatus =
  | 'Approved'
  | 'Pending'
  | 'Rejected'
  | 'Under Review'
  | 'New'
  | 'Ready to Travel'
  | 'Visa Granted'
  | 'Resubmission'
  | 'On Hold'

type ApplicantRow = {
  name: string
  course: string
  university: string
  country: string
  status: VisaStatus
}

type PendingRow = {
  id: string
  date: string
  name: string
  course: string
  university: string
  country: string
  status: VisaStatus
  deadline: string
}

type AcceptedRow = {
  id: string
  date: string
  name: string
  course: string
  university: string
  country: string
  approvalDate: string
  status: VisaStatus
}

type RejectedRow = {
  id: string
  date: string
  name: string
  course: string
  university: string
  country: string
  remarks: string
  status: VisaStatus
}

const defaultRows: ApplicantRow[] = [
  {
    name: 'Sonam Dema',
    course: 'Bachelor of Education',
    university: 'Edith Cowan College',
    country: 'Australia',
    status: 'Approved',
  },
  {
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    status: 'Rejected',
  },
  {
    name: 'Nyingye Meto',
    course: 'Bachelor of Science',
    university: 'SAE University College',
    country: 'Australia',
    status: 'Pending',
  },
  {
    name: 'Pema Cheki',
    course: 'Bachelor of Management Studies',
    university: 'Murdoch College',
    country: 'Australia',
    status: 'Pending',
  },
  {
    name: 'Dendup Tshering',
    course: 'Bachelor of Architecture',
    university: 'University of New Castle',
    country: 'Australia',
    status: 'Approved',
  },
  {
    name: 'Damchey Norbu',
    course: 'Bachelor of Laws',
    university: 'Edith Cowan College',
    country: 'Australia',
    status: 'Approved',
  },
]

const pendingRows: PendingRow[] = [
  {
    id: '01',
    date: '10/07/25',
    name: 'Nyingye Meto',
    course: 'Bachelor of Science',
    university: 'SAE University College',
    country: 'Australia',
    status: 'Under Review',
    deadline: '10/08/25',
  },
  {
    id: '02',
    date: '10/10/25',
    name: 'Pema Cheki',
    course: 'Bachelor of Arts',
    university: 'Murdoch College',
    country: 'Australia',
    status: 'Under Review',
    deadline: '10/11/25',
  },
  {
    id: '04',
    date: '10/02/25',
    name: 'Dendup Tshering',
    course: 'Bachelor of Architecture',
    university: 'University of New Castle',
    country: 'Australia',
    status: 'Under Review',
    deadline: '10/03/25',
  },
  {
    id: '32',
    date: '10/05/25',
    name: 'Damchey Norbu',
    course: 'Bachelor of Laws',
    university: 'Edith Cowan College',
    country: 'Australia',
    status: 'New',
    deadline: '10/06/25',
  },
  {
    id: '43',
    date: '10/12/25',
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    status: 'New',
    deadline: '10/01/26',
  },
  {
    id: '54',
    date: '10/02/25',
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    status: 'New',
    deadline: '10/03/26',
  },
]

const acceptedRows: AcceptedRow[] = [
  {
    id: '01',
    date: '10/08/25',
    name: 'Nyingye Meto',
    course: 'Bachelor of Science',
    university: 'SAE University College',
    country: 'Australia',
    approvalDate: '10/08/25',
    status: 'Ready to Travel',
  },
  {
    id: '02',
    date: '03/11/25',
    name: 'Pema Cheki',
    course: 'Bachelor of Arts',
    university: 'Murdoch College',
    country: 'Australia',
    approvalDate: '10/11/25',
    status: 'Approved',
  },
  {
    id: '04',
    date: '12/03/25',
    name: 'Dendup Tshering',
    course: 'Bachelor of Architecture',
    university: 'University of New Castle',
    country: 'Australia',
    approvalDate: '10/03/25',
    status: 'Visa Granted',
  },
  {
    id: '32',
    date: '07/06/25',
    name: 'Damchey Norbu',
    course: 'Bachelor of Laws',
    university: 'Edith Cowan College',
    country: 'Australia',
    approvalDate: '10/06/25',
    status: 'Approved',
  },
  {
    id: '43',
    date: '21/01/25',
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    approvalDate: '10/01/26',
    status: 'Approved',
  },
  {
    id: '54',
    date: '06/03/25',
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    approvalDate: '10/03/26',
    status: 'Ready to Travel',
  },
]

const rejectedRows: RejectedRow[] = [
  {
    id: '01',
    date: '10/08/25',
    name: 'Nyingye Meto',
    course: 'Bachelor of Science',
    university: 'SAE University College',
    country: 'Australia',
    remarks: 'Missing Financial Documents',
    status: 'Resubmission',
  },
  {
    id: '02',
    date: '03/11/25',
    name: 'Pema Cheki',
    course: 'Bachelor of Arts',
    university: 'Murdoch College',
    country: 'Australia',
    remarks: 'Low IELTS Score',
    status: 'On Hold',
  },
  {
    id: '04',
    date: '12/03/25',
    name: 'Dendup Tshering',
    course: 'Bachelor of Architecture',
    university: 'University of New Castle',
    country: 'Australia',
    remarks: 'Medical or PCC Issue',
    status: 'Rejected',
  },
  {
    id: '32',
    date: '07/06/25',
    name: 'Damchey Norbu',
    course: 'Bachelor of Laws',
    university: 'Edith Cowan College',
    country: 'Australia',
    remarks: 'Unable to Verify Documents',
    status: 'Resubmission',
  },
  {
    id: '43',
    date: '21/01/25',
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    remarks: 'Application Withdrawn',
    status: 'Rejected',
  },
  {
    id: '54',
    date: '06/03/25',
    name: 'Dorji Wangmo',
    course: 'Bachelor of Arts',
    university: 'Curtin College',
    country: 'Australia',
    remarks: 'Incomplete Application Form',
    status: 'On Hold',
  },
]

const statusStyles: Record<VisaStatus, { bg: string; dot: string; text: string }> = {
  Approved: {
    bg: '#D1F8D5',
    dot: '#2FB154',
    text: '#1F7A36',
  },
  Pending: {
    bg: '#FCEEB0',
    dot: '#F2C122',
    text: '#A57411',
  },
  Rejected: {
    bg: '#FFD8D8',
    dot: '#FF6464',
    text: '#AD2B2B',
  },
  'Under Review': {
    bg: '#D9F4C9',
    dot: '#6ABF4B',
    text: '#3C7F29',
  },
  New: {
    bg: '#D9E9FF',
    dot: '#1F7BFF',
    text: '#1F61C1',
  },
  'Ready to Travel': {
    bg: '#FEE7CC',
    dot: '#FF9D3B',
    text: '#C26611',
  },
  'Visa Granted': {
    bg: '#FDF3B2',
    dot: '#F7CC1F',
    text: '#B1840D',
  },
  Resubmission: {
    bg: '#EEF5C8',
    dot: '#8EB31A',
    text: '#5F7A0E',
  },
  'On Hold': {
    bg: '#FDE0CC',
    dot: '#FF9D3B',
    text: '#C26611',
  },
}

type DashboardTableProps = {
  activeTab: number
  query?: string
}

const DashboardTable: React.FC<DashboardTableProps> = ({ activeTab, query = '' }) => {
  const isPendingView = activeTab === 1
  const isAcceptedView = activeTab === 2
  const isRejectedView = activeTab === 3

  // normalize query
  const q = query.trim().toLowerCase()

  // helper to match common fields
  const matchesQuery = (item: {
    name: string
    course: string
    university: string
    country: string
  }) => {
    if (!q) return true
    return (
      item.name.toLowerCase().includes(q) ||
      item.course.toLowerCase().includes(q) ||
      item.university.toLowerCase().includes(q) ||
      item.country.toLowerCase().includes(q)
    )
  }

  // filtered datasets
  const filteredDefault = defaultRows.filter(matchesQuery)
  const filteredPending = pendingRows.filter(matchesQuery)
  const filteredAccepted = acceptedRows.filter(matchesQuery)
  const filteredRejected = rejectedRows.filter(matchesQuery)

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="overflow-hidden">
        <table className="w-full table-auto text-left text-[12px] text-[#2F2F2F] [&>thead>tr>th]:px-6 [&>tbody>tr>td]:px-6">
          {isPendingView ? (
            <>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '8%' }} />
              </colgroup>
              <thead className="border-b border-[#E4E7EC] text-[#A1A7B0]">
                <tr className="h-12">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>University</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F5]">
                {filteredPending.map((row) => {
                  const style = statusStyles[row.status]
                  return (
                    <tr key={`${row.id}-${row.name}`} className="h-[62px]">
                      <td>{row.id}</td>
                      <td className="whitespace-nowrap">{row.date}</td>
                      <td>{row.name}</td>
                      <td>{row.course}</td>
                      <td>{row.university}</td>
                      <td>{row.country}</td>
                      <td>
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium"
                          style={{ backgroundColor: style.bg, color: style.text }}
                        >
                          <span
                            aria-hidden
                            className="block h-[10px] w-[10px] rounded-full"
                            style={{ backgroundColor: style.dot }}
                          />
                          <span className="whitespace-nowrap">{row.status}</span>
                        </span>
                      </td>
                      <td className="whitespace-nowrap">{row.deadline}</td>
                    </tr>
                  )
                })}
              </tbody>
            </>
          ) : isAcceptedView ? (
            <>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '8%' }} />
              </colgroup>
              <thead className="border-b border-[#E4E7EC] text-[#A1A7B0]">
                <tr className="h-12">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>University</th>
                  <th>Country</th>
                  <th>Approval Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F5]">
                {filteredAccepted.map((row) => {
                  const style = statusStyles[row.status]
                  return (
                    <tr key={`${row.id}-${row.name}`} className="h-[62px]">
                      <td>{row.id}</td>
                      <td className="whitespace-nowrap">{row.date}</td>
                      <td>{row.name}</td>
                      <td>{row.course}</td>
                      <td>{row.university}</td>
                      <td>{row.country}</td>
                      <td className="whitespace-nowrap">{row.approvalDate}</td>
                      <td>
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium"
                          style={{ backgroundColor: style.bg, color: style.text }}
                        >
                          <span
                            aria-hidden
                            className="block h-[10px] w-[10px] rounded-full"
                            style={{ backgroundColor: style.dot }}
                          />
                          <span className="whitespace-nowrap">{row.status}</span>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </>
          ) : isRejectedView ? (
            <>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '9%' }} />
                <col style={{ width: '11%' }} />
                <col style={{ width: '8%' }} />
              </colgroup>
              <thead className="border-b border-[#E4E7EC] text-[#A1A7B0]">
                <tr className="h-12">
                  <th>ID</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>University</th>
                  <th>Country</th>
                  <th>Remarks</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F5]">
                {filteredRejected.map((row) => {
                  const style = statusStyles[row.status]
                  return (
                    <tr key={`${row.id}-${row.name}`} className="h-[62px]">
                      <td>{row.id}</td>
                      <td className="whitespace-nowrap">{row.date}</td>
                      <td>{row.name}</td>
                      <td>{row.course}</td>
                      <td>{row.university}</td>
                      <td>{row.country}</td>
                      <td className="text-[#F16464]">{row.remarks}</td>
                      <td>
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium"
                          style={{ backgroundColor: style.bg, color: style.text }}
                        >
                          <span
                            aria-hidden
                            className="block h-[10px] w-[10px] rounded-full"
                            style={{ backgroundColor: style.dot }}
                          />
                          <span className="whitespace-nowrap">{row.status}</span>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </>
          ) : (
            <>
              <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '24%' }} />
                <col style={{ width: '26%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <thead className="border-b border-[#E4E7EC] text-[#A1A7B0]">
                <tr className="h-12">
                  <th>Name</th>
                  <th>Course</th>
                  <th>University</th>
                  <th>Country</th>
                  <th>Visa Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F5]">
                {filteredDefault.map((row) => {
                  const style = statusStyles[row.status]
                  return (
                    <tr key={row.name} className="h-[62px]">
                      <td>{row.name}</td>
                      <td>{row.course}</td>
                      <td>{row.university}</td>
                      <td>{row.country}</td>
                      <td>
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium"
                          style={{ backgroundColor: style.bg, color: style.text }}
                        >
                          <span
                            aria-hidden
                            className="block h-[10px] w-[10px] rounded-full"
                            style={{ backgroundColor: style.dot }}
                          />
                          <span className="whitespace-nowrap">{row.status}</span>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  )
}

export default DashboardTable
