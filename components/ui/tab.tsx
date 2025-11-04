// components/ui/tabs.tsx
"use client";

import React from "react";

type TabsProps = {
    tabs: string[];
    active: number;
    onChange: (index: number) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, active, onChange }) => {
    return (
        <div className="flex gap-4 border-b border-[#E4E7EC]">
            {tabs.map((tab, idx) => {
                const isActive = idx === active;
                return (
                    <button
                        key={tab}
                        onClick={() => onChange(idx)}
                        className={`py-3 text-sm font-medium transition-all ${isActive
                                ? "text-[#2F2F2F] border-b-2 border-[#769FCD]"
                                : "text-[#A1A7B0]"
                            }`}
                    >
                        {tab}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;
