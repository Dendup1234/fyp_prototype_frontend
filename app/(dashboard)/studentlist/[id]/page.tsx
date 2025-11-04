// app/students/[id]/page.tsx
'use client'
import { notFound } from "next/navigation";
import StudentTable, {
    StudentRow,
    Column,
} from "@/components/ui/student_table"; // 👈 import your component
import Navbar from "@/components/ui/navbar";
import BreadcrumbHeader from "@/components/ui/breadcrumb-header";
import { use } from "react";

const STUDENTS: StudentRow[] = [
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
        applicationStatus: "View Status",
    },
    {
        id: "04",
        name: "Dendup Tshering",
        course: "Bachelor of Arts",
        university: "Murdoch College",
        country: "Australia",
        completionDate: "10/11/25",
        applicationStatus: "View Status",
    },
];

// fake stages for demo
const STAGES = [
    { no: "01", stage: "Profile Created", date: "10/05/25", status: "Completed", remarks: "--" },
    { no: "02", stage: "Selection of Course and institution", date: "10/06/25", status: "Completed", remarks: "--" },
    { no: "03", stage: "Application Submitted", date: "10/07/25", status: "Completed", remarks: "--" },
    { no: "04", stage: "Support in English course", date: "--", status: "Completed", remarks: "Already has IELTS Score Report" },
    { no: "05", stage: "Obtained Offer Letter", date: "10/12/25", status: "Pending", remarks: "Waiting for University's Decision" },
    { no: "06", stage: "Documentation for VISA application", date: "--", status: "Incomplete", remarks: "--" },
];

type PageProps = {
    params: {
        id: string;
    };
};

export default function StudentDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);             // ✅ unwrap in client component

    const student = STUDENTS.find((s) => s.id === id);
    if (!student) {
        notFound();
    }

    // 👇 columns for the top table – we can rename the headers here
    const columns: Column<StudentRow>[] = [
        { key: "id", header: "ID" },
        {
            key: "completionDate",
            header: "Date", // you called it "Date" in the screenshot
            className: "whitespace-nowrap",
        },
        { key: "name", header: "Name" },
        { key: "course", header: "Course" },
        { key: "university", header: "University" },
        { key: "country", header: "Country" },
        {
            key: "expectedCompletionDate" as keyof StudentRow, // 👈 fake unique key
            header: "Expected Completion Date",
            render: (row) => row.completionDate, // 👈 still show completionDate data
        },
    ];

    return (

        <div className="min-h-screen bg-[#F7FBFC] p-6 space-y-6">
            {/* 🔹 breadcrumb bar */}
            <BreadcrumbHeader studentName={student.name} />

            {/* top card using the shared StudentTable */}
            <div className="rounded-3xl bg-white shadow-sm p-5">
                <StudentTable
                    rows={[student]}          // 👈 single row
                    columns={columns}
                    showActions={false}       // no Edit column here
                />
            </div>

            {/* stages table like your screenshot */}
            <div className="rounded-3xl bg-white shadow-sm p-5">
                <table className="w-full text-[12px] text-[#2F2F2F]">
                    <thead className="text-[#A1A7B0] border-b border-[#E4E7EC]">
                        <tr className="h-12">
                            <th className="text-left">No.</th>
                            <th className="text-left">Stage</th>
                            <th className="text-left">Date</th>
                            <th className="text-left">Status</th>
                            <th className="text-left">Remarks</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F3F5]">
                        {STAGES.map((item) => (
                            <tr key={item.no} className="h-[56px]">
                                <td>{item.no}</td>
                                <td>{item.stage}</td>
                                <td>{item.date}</td>
                                <td>
                                    {item.status === "Completed" && (
                                        <span className="inline-flex items-center gap-2 rounded-full bg-[#D1F8D5] px-3 py-1 text-[12px] font-medium text-[#1F7A36]">
                                            <span className="h-[10px] w-[10px] rounded-full bg-[#2FB154]" />
                                            Completed
                                        </span>
                                    )}
                                    {item.status === "Pending" && (
                                        <span className="inline-flex items-center gap-2 rounded-full bg-[#FCEEB0] px-3 py-1 text-[12px] font-medium text-[#A57411]">
                                            <span className="h-[10px] w-[10px] rounded-full bg-[#F2C122]" />
                                            Pending
                                        </span>
                                    )}
                                    {item.status === "Incomplete" && (
                                        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD8D8] px-3 py-1 text-[12px] font-medium text-[#AD2B2B]">
                                            <span className="h-[10px] w-[10px] rounded-full bg-[#FF6464]" />
                                            Incomplete
                                        </span>
                                    )}
                                </td>
                                <td>{item.remarks}</td>
                                <td>
                                    <button className="text-[12px] font-medium text-[#7B7B7B] underline">
                                        Notify
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
