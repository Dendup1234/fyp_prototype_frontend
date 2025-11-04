import React from "react";
import SideMenu from '@/components/ui/sidemenu'
import Navbar from "@/components/ui/navbar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Left: Sidebar */}
            <SideMenu />

            {/* Right: Page content */}
            <main className="flex-1 overflow-y-auto px-6 py-8">
                {children}
            </main>
        </div>
    );
}
