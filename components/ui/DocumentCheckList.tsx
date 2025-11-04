"use client";

import React, { useState } from "react";

type Section = {
    id: string;
    icon: React.ReactNode;
    label: string;
};

// --------------------- ICONS ---------------------

const ProfileIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.62 18.12C5.64 17.34 6.78 16.725 8.04 16.275C9.3 15.825 10.62 15.6 12 15.6C13.38 15.6 14.7 15.825 15.96 16.275C17.22 16.725 18.36 17.34 19.38 18.12C20.08 17.3 20.625 16.37 21.015 15.33C21.405 14.29 21.6 13.18 21.6 12C21.6 9.34 20.665 7.075 18.795 5.205C16.925 3.335 14.66 2.4 12 2.4C9.34 2.4 7.075 3.335 5.205 5.205C3.335 7.075 2.4 9.34 2.4 12C2.4 13.18 2.595 14.29 2.985 15.33C3.375 16.37 3.92 17.3 4.62 18.12ZM12 13.2C10.82 13.2 9.825 12.795 9.015 11.985C8.205 11.175 7.8 10.18 7.8 9C7.8 7.82 8.205 6.825 9.015 6.015C9.825 5.205 10.82 4.8 12 4.8C13.18 4.8 14.175 5.205 14.985 6.015C15.795 6.825 16.2 7.82 16.2 9C16.2 10.18 15.795 11.175 14.985 11.985C14.175 12.795 13.18 13.2 12 13.2Z"
            fill="#B9D7EA"
        />
    </svg>
);

const ContactIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.6667 21.3333H21.3333V2.66667H18.6667V21.3333ZM5.33333 14.6667C5.71111 14.6667 6.02778 14.5389 6.28333 14.2833C6.53889 14.0278 6.66667 13.7111 6.66667 13.3333C6.66667 12.9556 6.53889 12.6389 6.28333 12.3833C6.02778 12.1278 5.71111 12 5.33333 12C4.95556 12 4.63889 12.1278 4.38333 12.3833C4.12778 12.6389 4 12.9556 4 13.3333C4 13.7111 4.12778 14.0278 4.38333 14.2833C4.63889 14.5389 4.95556 14.6667 5.33333 14.6667ZM4 10.6667H14.6667V5.33333H4V10.6667ZM12 24C10.34 24 8.78 23.685 7.32 23.055C5.86 22.425 4.59 21.57 3.51 20.49C2.43 19.41 1.575 18.14 0.945 16.68C0.315 15.22 0 13.66 0 12C0 10.34 0.315 8.78 0.945 7.32C1.575 5.86 2.43 4.59 3.51 3.51C4.59 2.43 5.86 1.575 7.32 0.945C8.78 0.315 10.34 0 12 0H21.3333C22.0667 0 22.6944 0.261111 23.2167 0.783333C23.7389 1.30556 24 1.93333 24 2.66667V21.3333C24 22.0667 23.7389 22.6944 23.2167 23.2167C22.6944 23.7389 22.0667 24 21.3333 24H12Z"
            fill="#B9D7EA"
        />
    </svg>
);

const TravelIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.29138 24L6.04104 17.9507L0 14.6959L2.33105 12.3945L7.09165 13.2164L10.4405 9.86301L0.0328317 5.42466L2.7907 2.59726L15.4309 4.83288L19.5021 0.756164C20.0055 0.252055 20.6293 0 21.3735 0C22.1176 0 22.7414 0.252055 23.2449 0.756164C23.7483 1.26027 24 1.87945 24 2.6137C24 3.34795 23.7483 3.96712 23.2449 4.47123L19.1409 8.58082L21.3735 21.2055L18.5828 24L14.1176 13.5781L10.7688 16.9315L11.6224 21.6658L9.29138 24Z"
            fill="#B9D7EA"
        />
    </svg>
);

const EducationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 24L4.36364 18.9333V10.9333L0 8L12 0L24 8V18.6667H21.8182V9.46667L19.6364 10.9333V18.9333L12 24ZM12 12.9333L19.4727 8L12 3.06667L4.52727 8L12 12.9333ZM12 20.9667L17.4545 17.3667V12.3333L6.54545 12.3333V17.3667L12 20.9667Z"
            fill="#B9D7EA"
        />
    </svg>
);

const FinanceIcon = () => (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.75 11H11.475V10.2C11.9417 10.1333 12.3375 9.94167 12.6625 9.625C12.9875 9.30833 13.15 8.9 13.15 8.4C13.15 7.96667 12.9833 7.60417 12.65 7.3125C12.3167 7.02083 11.9333 6.78333 11.5 6.6V4.75C11.6667 4.8 11.8042 4.88333 11.9125 5C12.0208 5.11667 12.1 5.25833 12.15 5.425L13.05 5.05C12.9333 4.7 12.7333 4.42083 12.45 4.2125C12.1667 4.00417 11.85 3.86667 11.5 3.8V3H10.75V3.775C10.2833 3.825 9.8875 3.99583 9.5625 4.2875C9.2375 4.57917 9.075 4.96667 9.075 5.45C9.075 5.9 9.24583 6.275 9.5875 6.575C9.92917 6.875 10.3167 7.11667 10.75 7.3V9.275C10.4833 9.19167 10.2583 9.05 10.075 8.85L8.825 8.525C8.95833 8.99167 9.19167 9.375 9.525 9.675C9.85833 9.975 10.2667 10.1583 10.75 10.225V11ZM7 14C5.05 14 3.39583 13.3208 2.0375 11.9625C0.679167 10.6042 0 8.95 0 7C0 5.05 0.679167 3.39583 2.0375 2.0375C3.39583 0.679167 5.05 0 7 0H15C16.95 0 18.6042 0.679167 19.9625 2.0375C21.3208 3.39583 22 5.05 22 7C22 8.95 21.3208 10.6042 19.9625 11.9625C18.6042 13.3208 16.95 14 15 14H7Z"
            fill="#B9D7EA"
        />
    </svg>
);

// --------------------- SECTIONS ---------------------

const sections: Section[] = [
    { id: "personal", icon: <ProfileIcon />, label: "Personal Information" },
    { id: "contact", icon: <ContactIcon />, label: "Contact Details" },
    { id: "travel", icon: <TravelIcon />, label: "Travel Details" },
    { id: "education", icon: <EducationIcon />, label: "Education" },
    { id: "finance", icon: <FinanceIcon />, label: "Finance" },
];

// --------------------- CHEVRONS ---------------------

const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#769FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l4 4 4-4" />
    </svg>
);

const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#769FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
    </svg>
);

// --------------------- MAIN COMPONENT ---------------------

export default function DocumentChecklist() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setOpenSection((prev) => (prev === id ? null : id));
    };

    return (
        <div
            className="
        w-[280px]
        rounded-3xl
        bg-white
        shadow-[0_10px_35px_rgba(0,0,0,0.08)]
        border border-[#EFF3F7]
        overflow-hidden
      "
        >
            {/* Header */}
            <div className="bg-[#C7D9EF] px-5 py-3 text-sm font-semibold text-[#2F2F2F]">
                Check
            </div>

            {/* Section list */}
            <ul className="divide-y divide-[#F1F3F5] text-[13px] text-[#2F2F2F]">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="flex w-full items-center justify-between px-5 py-3 text-left hover:bg-[#F8FAFC] transition-colors"
                        >
                            <span className="flex items-center gap-3">
                                <span className="text-lg">{section.icon}</span>
                                {section.label}
                            </span>
                            {openSection === section.id ? <ChevronUp /> : <ChevronDown />}
                        </button>

                        {openSection === section.id && (
                            <div className="px-6 pb-3 text-[12px] text-[#7B7B7B]">
                                <p className="mt-1">Details about {section.label}...</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
