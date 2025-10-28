import React from 'react'

type VisaStatus = 'Approved' | 'Pending' | 'Rejected'

type Applicant = {
  name: string
  course: string
  university: string
  country: string
  status: VisaStatus
}

const applicants: Applicant[] = [
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
}

const DashboardTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="grid grid-cols-5 gap-4 border-b border-[#E4E7EC] px-6 py-4 text-[12px] font-medium text-[#A1A7B0]">
        <span>Name</span>
        <span>Course</span>
        <span>University</span>
        <span>Country</span>
        <span>Visa Status</span>
      </div>

      <div className="divide-y divide-[#F1F3F5]">
        {applicants.map((applicant) => {
          const style = statusStyles[applicant.status]

          return (
            <div
              key={applicant.name}
              className="grid grid-cols-5 items-center gap-4 px-6 py-5 text-[12px] text-[#2F2F2F]"
            >
              <span>{applicant.name}</span>
              <span>{applicant.course}</span>
              <span>{applicant.university}</span>
              <span>{applicant.country}</span>
              <span>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium"
                  style={{ backgroundColor: style.bg, color: style.text }}
                >
                  <span
                    aria-hidden
                    className="block h-[10px] w-[10px] rounded-full"
                    style={{ backgroundColor: style.dot }}
                  />
                  {applicant.status}
                </span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardTable
