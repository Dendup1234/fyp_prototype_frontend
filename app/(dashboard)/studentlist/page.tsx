"use client";

import Navbar from "@/components/ui/navbar";
import React, { useState } from "react";
import DashboardSearch from "@/components/ui/dashboard-search";
import StudentTable, {
    StudentRow,
    Column,
    ApplicationStatus,
} from "@/components/ui/student_table";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
        name: "Dendup Tshering",
        course: "Bachelor of Arts",
        university: "Murdoch College",
        country: "Australia",
        completionDate: "10/11/25",
        applicationStatus: "Under Review",
    },
];

export default function StudentList() {
    const router = useRouter();
    const [students] = useState<StudentRow[]>(initialStudents);

    // 👇 add this
    const [query, setQuery] = useState("");

    const statusColor: Record<ApplicationStatus, string> = {
        "View Status": "#769FCD",
        Approved: "#2FB154",
        Pending: "#F2C122",
        Rejected: "#FF6464",
        "Under Review": "#1F61C1",
    };

    const handleViewStatus = (row: StudentRow) => {
        router.push(`/studentlist/${row.id}`);
    };

    const columns: Column<StudentRow>[] = [
        { key: "id", header: "ID" },
        {
            key: "name",
            header: "Name",
            render: (row) => (
                <button
                    onClick={() => router.push(`/studentlist/${row.id}/profile`)}
                    className="text-[#2F2F2F] hover:underline"
                >
                    {row.name}
                </button>
            ),
        },
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
                    onClick={() => handleViewStatus(row)}
                    className="text-[12px] font-medium underline"
                    style={{ color: statusColor[row.applicationStatus] }}
                >
                    {row.applicationStatus}
                </button>
            ),
        },
    ];

    // 👇 filter students by search query
    const filteredStudents = students.filter((s) => {
        if (!query) return true;
        const q = query.toLowerCase();
        return (
            s.name.toLowerCase().includes(q) ||
            s.course.toLowerCase().includes(q) ||
            s.university.toLowerCase().includes(q) ||
            s.country.toLowerCase().includes(q)
        );
    });

    return (
        <div className="flex min-h-screen bg-[#F7FBFC]">
            <main className="flex flex-1 flex-col bg-[#E6EAEB]">
                <Navbar userName="Pradeep Pokhrel" initials="PP" />

                <section className="flex flex-1 flex-col gap-8 bg-[#F7FBFC] p-6">
                    {/* now this will actually set the query */}
                    <DashboardSearch onSearch={(val: string) => setQuery(val)} />

                    <StudentTable
                        rows={filteredStudents}
                        columns={columns}
                        showActions={true}
                        onEdit={(row) => alert(`Edit ${row.name}`)}
                    />

                    <Button type="submit" className="mt-2">
                        View All
                    </Button>
                </section>
            </main>
        </div>
    );
}
