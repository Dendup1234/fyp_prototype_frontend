"use client";

import React, { useState } from "react";
import DataTable, { Column } from "@/components/ui/data_table";
import Tabs from "@/components/ui/tab";
import DashboardSearch from "@/components/ui/dashboard-search";
import { useRouter } from "next/navigation";

type DocumentStatus = "Verified" | "Under Review" | "Approved" | "Rejected";

type DocumentRow = {
    id: string;          // document id
    studentId: string;   // 👈 so we can route to that student's document
    date: string;
    name: string;
    document: string;
    file: string;
    status: DocumentStatus;
};

const statusStyles: Record<DocumentStatus, { bg: string; dot: string; text: string }> = {
    Verified: {
        bg: "#D1F8D5",
        dot: "#2FB154",
        text: "#1F7A36",
    },
    "Under Review": {
        bg: "#FCEEB0",
        dot: "#F2C122",
        text: "#A57411",
    },
    Approved: {
        bg: "#D9F4C9",
        dot: "#6ABF4B",
        text: "#3C7F29",
    },
    Rejected: {
        bg: "#FFD8D8",
        dot: "#FF6464",
        text: "#AD2B2B",
    },
};

const visaDocs: DocumentRow[] = [
    {
        id: "00",
        studentId: "01",
        date: "10/08/25",
        name: "Sonam Seldon",
        document: "Visa Application Form",
        file: "form.pdf",
        status: "Verified",
    },
    {
        id: "02",
        studentId: "02",
        date: "03/11/25",
        name: "Pema Cheki",
        document: "Payment Receipt",
        file: "receipt.pdf",
        status: "Under Review",
    },
    {
        id: "04",
        studentId: "03",
        date: "12/03/25",
        name: "Dendup Tshering",
        document: "Biometrics Proof",
        file: "proof.pdf",
        status: "Approved",
    },
    {
        id: "07",
        studentId: "04",
        date: "12/03/25",
        name: "Karma Tshering",
        document: "Police Clearance Certificate",
        file: "PCC.pdf",
        status: "Approved",
    },
    {
        id: "34",
        studentId: "05",
        date: "12/03/25",
        name: "Dendup Dorji",
        document: "Police Clearance Certificate",
        file: "PCC.pdf",
        status: "Rejected",
    },
];

const personalDocs: DocumentRow[] = [
    {
        id: "11",
        studentId: "01",
        date: "08/01/25",
        name: "Sonam Tshering",
        document: "Passport Copy",
        file: "passport.pdf",
        status: "Verified",
    },
];

const loaDocs: DocumentRow[] = [
    {
        id: "21",
        studentId: "02",
        date: "09/01/25",
        name: "Nyingye Meto",
        document: "Offer Letter",
        file: "offer.pdf",
        status: "Under Review",
    },
];

const otherDocs: DocumentRow[] = [
    {
        id: "36",
        studentId: "03",
        date: "12/03/25",
        name: "Dendup Dorji",
        document: "Medical Exam Report",
        file: "MedExamReport.pdf",
        status: "Verified",
    },
];

export default function DocumentDashboardPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);
    const [query, setQuery] = useState("");

    const tabs = ["Visa Documents", "Personal Documents", "LOA/CAS/COE", "Other Documents"];

    // pick dataset based on tab
    const currentRows =
        activeTab === 0
            ? visaDocs
            : activeTab === 1
                ? personalDocs
                : activeTab === 2
                    ? loaDocs
                    : otherDocs;

    // filter by search
    const filteredRows = currentRows.filter((row) =>
        query
            ? row.name.toLowerCase().includes(query.toLowerCase()) ||
            row.document.toLowerCase().includes(query.toLowerCase())
            : true
    );

    const columns: Column<DocumentRow>[] = [
        { key: "id", header: "ID" },
        { key: "date", header: "Date" },
        { key: "name", header: "Name" },
        { key: "document", header: "Document" },
        { key: "file", header: "File" },
        {
            key: "status",
            header: "Status",
            render: (row) => {
                const s = statusStyles[row.status];
                return (
                    <span
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium"
                        style={{ backgroundColor: s.bg, color: s.text }}
                    >
                        <span
                            className="h-[10px] w-[10px] rounded-full"
                            style={{ backgroundColor: s.dot }}
                        />
                        {row.status}
                    </span>
                );
            },
        },
        {
            // 👇 use a unique key name so we don't clash with "id"
            key: "actions" as keyof DocumentRow,
            header: "Action",
            render: (row) => (
                <button
                    onClick={() => router.push(`/documents/${row.studentId}/${row.id}`)}
                    className="text-[12px] font-medium text-[#7B7B7B] underline"
                >
                    View Document
                </button>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#F7FBFC] p-6 space-y-5">
            {/* Tabs */}
            <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

            {/* Search + Filter */}
            <div className="flex items-center justify-between gap-4">
                {/* you already had this component */}
                <DashboardSearch
                />
            </div>

            {/* Table */}
            <DataTable<DocumentRow>
                rows={filteredRows}
                columns={columns}
                showActions={false}
            />
        </div>
    );
}
