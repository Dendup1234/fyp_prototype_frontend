// app/students/[id]/profile/page.tsx
'use client'
import { notFound } from "next/navigation";
import { use } from "react";

const STUDENTS = [
    {
        id: "01",
        name: "Nyingye Meto",
        email: "nmeto@gmail.com",
        about:
            "Nyingye is passionate about helping Bhutanese students achieve their dream of studying abroad",
        education: [
            "Graduated from ABC High School",
            "Graduated from DEF Middle School",
        ],
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
        id: "02",
        name: "Pema Cheki",
        email: "pema@example.com",
        about: "Highly motivated student...",
        education: ["Graduated from XYZ High School"],
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
        id: "04",
        name: "Dendup Tshering",
        email: "pema@example.com",
        about: "Loves to play football",
        education: ["Graduated from Samtse Higher Secondary School"],
        avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
];

type PageProps = {
    params: {
        id: string;
    };
};

export default function StudentProfilePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);             // ✅ unwrap in client component

    const student = STUDENTS.find((s) => s.id === id);
    if (!student) {
        notFound();
    }


    return (
        <div className="min-h-screen bg-[#F7FBFC] p-6 space-y-6">
            {/* breadcrumb bar */}
            <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] px-6 py-3 text-sm text-[#A1A7B0]">
                <button
                    onClick={() => history.back()}
                    className="flex items-center gap-1 text-[#769FCD] hover:text-[#4A89C8]"
                >
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
                    Student
                </button>
                <span>/</span>
                <span className="text-[#2F2F2F] font-medium">{student.name}</span>
                <span>/</span>
                <span className="text-[#769FCD] underline">Profile</span>
            </div>

            {/* export button */}
            <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm text-[#2F2F2F] shadow-sm">
                <span className="text-[#769FCD] text-lg">📄</span>
                Export
            </button>

            {/* profile card */}
            <div className="rounded-3xl bg-white shadow-sm overflow-hidden">
                <div className="flex flex-col items-center gap-3 bg-[#D2E3F1] px-6 py-10">
                    <div className="h-20 w-20 overflow-hidden rounded-full bg-white">
                        {student.avatar ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={student.avatar}
                                alt={student.name}
                                className="h-full w-full object-cover"
                            />
                        ) : null}
                    </div>
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-[#2F2F2F]">
                            {student.name}
                        </h2>
                        <p className="text-xs text-[#7B7B7B]">{student.email}</p>
                    </div>
                </div>

                {/* about */}
                <div className="space-y-4 p-6">
                    <div>
                        <h3 className="text-sm font-semibold text-[#2F2F2F] mb-2">
                            About
                        </h3>
                        <div className="rounded-2xl bg-[#FDFDFE] p-4 text-[12px] text-[#2F2F2F]">
                            {student.about}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-[#2F2F2F] mb-2">
                            Education
                        </h3>
                        <div className="rounded-2xl bg-[#FDFDFE] p-4 text-[12px] text-[#2F2F2F]">
                            <ul className="list-disc pl-4 space-y-1">
                                {student.education?.map((ed) => (
                                    <li key={ed}>{ed}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
