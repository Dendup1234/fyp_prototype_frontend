import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${poppins.className} antialiased bg-[#F7FBFC] text-slate-900 min-h-screen flex flex-col`}>
            {/* ✅ Sticky Header */}
            <header className="sticky top-0 z-50 border-b border-[#B9D7EA] bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/agentzee-logo.png"
                            alt="Agentzee logo"
                            width={140}
                            height={40}
                            priority
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
                        <a href="#pipeline" className="transition hover:text-[#769FCD]">
                            How it works
                        </a>
                        <a href="#capabilities" className="transition hover:text-[#769FCD]">
                            Platform
                        </a>
                        <a href="#automation" className="transition hover:text-[#769FCD]">
                            Automations
                        </a>
                        <a href="#proof" className="transition hover:text-[#769FCD]">
                            Results
                        </a>
                    </nav>
                    <div className="flex items-center gap-3 text-sm">
                        <Link
                            href="/signin"
                            className="hidden font-semibold text-slate-500 transition hover:text-[#769FCD] md:inline"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/signin?mode=register"
                            className="rounded-full bg-[#769FCD] px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-[#769FCD]/90"
                        >
                            Partner with us
                        </Link>
                    </div>
                </div>
            </header>

            {/* ✅ Page Content */}
            <main className="flex-1 pt-24">{children}</main>

            {/* ✅ Footer */}
            <footer className="border-t border-[#B9D7EA] bg-white">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm text-slate-600 md:grid-cols-4">
                    <div>
                        <Image
                            src="/images/agentzee-logo.png"
                            alt="Super Agent logo"
                            width={140}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="mt-3 text-xs text-slate-500">
                            The operating system for global study abroad agencies. Built by former counselors, scaled with leading partners.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Company</p>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/about" className="transition hover:text-[#769FCD]">About</Link></li>
                            <li><Link href="/contact" className="transition hover:text-[#769FCD]">Contact</Link></li>
                            <li><Link href="/guides" className="transition hover:text-[#769FCD]">Guides</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Legal</p>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/privacy-policy" className="transition hover:text-[#769FCD]">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="transition hover:text-[#769FCD]">Terms</Link></li>
                            <li><Link href="/faq" className="transition hover:text-[#769FCD]">FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Connect</p>
                        <ul className="mt-3 space-y-2">
                            <li><a href="mailto:hello@superagent.com" className="transition hover:text-[#769FCD]">hello@superagent.com</a></li>
                            <li><a href="https://www.linkedin.com" className="transition hover:text-[#769FCD]" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com" className="transition hover:text-[#769FCD]" target="_blank" rel="noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <p className="border-t border-[#B9D7EA] py-6 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Super Agent. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
