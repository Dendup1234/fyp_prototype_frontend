'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type BreadcrumbProps = {
    studentName: string
}

const BreadcrumbHeader: React.FC<BreadcrumbProps> = ({ studentName }) => {
    const router = useRouter()

    return (
        <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] px-6 py-3 text-sm text-[#A1A7B0] shadow-sm">
            {/* 🔙 Back button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-1 text-[#769FCD] hover:text-[#4A89C8] transition-colors"
            >
                {/* inline SVG arrow */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>

                <span className="font-medium">Student List</span>
            </button>

            {/* separator + breadcrumb labels */}
            <span>/</span>
            <span className="text-[#2F2F2F] font-medium">{studentName}</span>
            <span>/</span>
            <button
                onClick={() => router.refresh()}
                className="text-[#769FCD] underline hover:text-[#4A89C8]"
            >
                Application Status
            </button>
        </div>
    )
}

export default BreadcrumbHeader
