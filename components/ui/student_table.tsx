// components/ui/student_table.tsx
'use client'
import React from 'react'

export type ApplicationStatus =
    | 'View Status'
    | 'Approved'
    | 'Pending'
    | 'Rejected'
    | 'Under Review'

export type StudentRow = {
    id: string
    name: string
    course: string
    university: string
    country: string
    completionDate: string
    applicationStatus: ApplicationStatus
}

export type Column<T> = {
    key: keyof T
    header: string
    render?: (row: T) => React.ReactNode
    className?: string
    width?: string | number
}

type StudentTableProps = {
    rows: StudentRow[]
    columns: Column<StudentRow>[]
    showActions?: boolean
    onEdit?: (row: StudentRow) => void
    onViewStatus?: (row: StudentRow) => void
}

const StudentTable: React.FC<StudentTableProps> = ({
    rows,
    columns,
    showActions = false,
    onEdit,
}) => {
    return (
        <div className="w-full overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-left text-[12px] text-[#2F2F2F]">
                    <thead className="border-b border-[#E4E7EC] bg-[#F8FAFC] text-[#A1A7B0]">
                        <tr className="h-12">
                            {columns.map((col, index) => (
                                <th
                                    key={`header-${String(col.key)}-${index}`}
                                    className={`px-6 ${col.className ?? ''}`}
                                    style={col.width ? { width: col.width } : {}}
                                >
                                    {col.header}
                                </th>
                            ))}
                            {showActions && <th className="px-6">Action</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F3F5]">
                        {rows.map((row, rowIndex) => (
                            <tr key={row.id} className="h-[60px]">
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={`cell-${rowIndex}-${String(col.key)}-${colIndex}`}
                                        className={`px-6 ${col.className ?? ''}`}
                                    >
                                        {col.render ? col.render(row) : (row as any)[col.key]}
                                    </td>
                                ))}
                                {showActions && (
                                    <td className="px-6">
                                        <button
                                            type="button"
                                            onClick={() => onEdit?.(row)}
                                            className="text-[12px] font-medium text-[#7B7B7B] underline"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length + (showActions ? 1 : 0)}
                                    className="px-6 py-6 text-center text-sm text-gray-400"
                                >
                                    No students yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentTable
