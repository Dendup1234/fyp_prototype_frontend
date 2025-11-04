// components/ui/data-table.tsx
import React from "react";

export type Column<T> = {
    key: keyof T;
    header: string;
    render?: (row: T) => React.ReactNode;
    className?: string;
    width?: string | number;
};

type DataTableProps<T> = {
    rows: T[];
    columns: Column<T>[];
    showActions?: boolean;
    onEdit?: (row: T) => void;
};

function DataTable<T extends { id?: string | number }>({
    rows,
    columns,
    showActions = false,
    onEdit,
}: DataTableProps<T>) {
    return (
        <div className="w-full overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-left text-[12px] text-[#2F2F2F]">
                    <thead className="border-b border-[#E4E7EC] bg-[#F8FAFC] text-[#A1A7B0]">
                        <tr className="h-12">
                            {columns.map((col, index) => (
                                <th
                                    key={`header-${String(col.key)}-${index}`} // ✅ ensure unique keys for headers
                                    className={`px-6 ${col.className ?? ""}`}
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
                            <tr key={`row-${(row as any).id ?? rowIndex}`} className="h-[60px]">
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={`cell-${rowIndex}-${String(col.key)}-${colIndex}`} // ✅ unique key
                                        className={`px-6 ${col.className ?? ""}`}
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
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default DataTable;
