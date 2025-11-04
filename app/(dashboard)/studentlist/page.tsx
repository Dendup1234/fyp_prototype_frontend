'use client'
import Navbar from '@/components/ui/navbar'
import React, { useState } from 'react'
import DashboardPage from '../dashboard/page'
import DashboardSearch from '@/components/ui/dashboard-search'
import StudentTable, {
    StudentRow,
    Column,
    ApplicationStatus
} from "@/components/ui/student_table";
import Button from '@/components/ui/button'

const initialStudents: StudentRow[] = [
    {
        id: "01",
        name: "Nyingye Meto",
        course: "Bachelor of Science",
        university: "SAE University College",
        country: "Australia",
        completionDate: "10/08/25",
        applicationStatus: "View Status",
    },
    {
        id: "02",
        name: "Pema Cheki",
        course: "Bachelor of Arts",
        university: "Murdoch College",
        country: "Australia",
        completionDate: "10/11/25",
        applicationStatus: "Under Review",
    },
    {
        id: "04",
        name: "Pema Cheki",
        course: "Bachelor of Arts",
        university: "Murdoch College",
        country: "Australia",
        completionDate: "10/11/25",
        applicationStatus: "Under Review",
    },
];

const StudentList = () => {
    const [students, setStudents] = useState<StudentRow[]>(initialStudents);
    // 👇 define columns in the parent — add/remove here anytime
    // helper can live here or in a utils file
    const statusColor: Record<ApplicationStatus, string> = {
        "View Status": "#769FCD",
        Approved: "#2FB154",
        Pending: "#F2C122",
        Rejected: "#FF6464",
        "Under Review": "#1F61C1",
    };
    const columns: Column<StudentRow>[] = [
        { key: "id", header: "ID" },
        { key: "name", header: "Name" },
        { key: "course", header: "Course" },
        { key: "university", header: "University" },
        { key: "country", header: "Country" },
        {
            key: "completionDate",
            header: "Completion Date",
            className: "whitespace-nowrap",
        },
        {
            key: "applicationStatus",
            header: "Application Status",
            render: (row) => (
                <button
                    onClick={() => alert(`View status for ${row.name}`)}
                    className="text-[12px] font-medium underline"
                    style={{ color: statusColor[row.applicationStatus] }}
                >
                    {row.applicationStatus}
                </button>
            ),
        },
    ];

    return (
        <div className="flex min-h-screen bg-[#F7FBFC]">
            <main className="flex flex-1 flex-col bg-[#E6EAEB]">
                <Navbar userName="Pradeep Pokhrel" initials="PP" />
                <section className="flex flex-1 flex-col gap-8 bg-[#F7FBFC] p-6">
                    <DashboardSearch>

                    </DashboardSearch>
                    <StudentTable
                        rows={students}
                        columns={columns}
                        showActions={true}
                        onEdit={(row) => alert(`Edit ${row.name}`)}
                    />
                    <Button type="submit" className="mt-2">View All</Button>



                </section>

            </main>
        </div>
    )
}
export default StudentList
