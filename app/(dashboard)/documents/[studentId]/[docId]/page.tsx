import BreadcrumbHeader from "@/components/ui/breadcrumb-header";
import DocumentChecklist from "@/components/ui/DocumentCheckList";
import Image from "next/image";
import { notFound } from "next/navigation";

// fake students
const STUDENTS = [
    { id: "01", name: "Sonam Seldon" },
    { id: "02", name: "Pema Cheki" },
];

// fake documents
const DOCUMENTS = [
    {
        id: "00",
        studentId: "01",
        title: "Medical Exam Report",
        status: "Verified",
        // 👇 Example image (you can replace this with your uploaded image URL)
        fileUrl:
            "/images/visa.jpeg",
        fileType: "image", // 👈 use "image" instead of PDF
    },
    {
        id: "doc-002",
        studentId: "02",
        title: "Police Clearance Certificate",
        status: "Under Review",
        fileUrl: "/docs/police-clearance.pdf",
        fileType: "pdf",
    },
];

type PageProps = {
    params: Promise<{
        studentId: string;
        docId: string;
    }>;
};

export default async function DocumentViewPage({ params }: PageProps) {
    const { studentId, docId } = await params;

    const student = STUDENTS.find((s) => s.id === studentId);
    const document = DOCUMENTS.find(
        (d) => d.id === docId && d.studentId === studentId
    );

    if (!student || !document) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#F7FBFC] p-6 space-y-6">
            {/* breadcrumb */}
            <BreadcrumbHeader studentName={student.name} />


            {/* mark as + save */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-[#2F2F2F]">Mark as:</span>
                    <div className="flex items-center gap-2 rounded-full bg-[#D1F8D5] px-3 py-1 text-xs font-medium text-[#1F7A36]">
                        <span className="h-[10px] w-[10px] rounded-full bg-[#2FB154]" />
                        {document.status}
                    </div>
                </div>
                <button className="rounded-full bg-[#5E7AAD] px-6 py-2 text-sm text-white">
                    Save
                </button>
            </div>

            {/* main content */}
            <div className="flex gap-6">
                {/* document preview */}
                <div className="flex-1 rounded-3xl bg-white p-4 shadow-sm">
                    {document.fileType === "pdf" ? (
                        <iframe
                            src={document.fileUrl}
                            className="h-[70vh] w-full rounded-2xl border"
                        />
                    ) : (
                        <div className="h-[70vh] w-full overflow-hidden rounded-2xl bg-white">
                            <img
                                src={document.fileUrl}
                                alt={document.title}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    )}
                </div>

                {/* right side checklist */}
                <DocumentChecklist />
            </div>
        </div>
    );
}
