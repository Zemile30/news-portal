'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/siteConfig";
import { UserIcon, SearchIcon, MenuIcon, ChevronsRightIcon } from "@/components/icons";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200">
            <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-6">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image src="/images/logo.png" alt="NBC News" width={44} height={30} priority />
                </Link>

                {/* Kateqoriya linkləri (desktop) */}
                <ul className="hidden md:flex items-center gap-8 text-xs text-gray-800">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={link.href} className="flex items-center gap-1.5 hover:text-brand">
                                {link.live && <span className="w-1.5 h-1.5 rounded-full bg-brand" />}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button aria-label="More categories">
                            <ChevronsRightIcon width={14} height={14} />
                        </button>
                    </li>
                </ul>

                {/* Sağ ikonlar */}
                <div className="flex items-center gap-5 text-gray-800">
                    <button aria-label="Account"><UserIcon /></button>
                    <button aria-label="Search"><SearchIcon /></button>
                    <button
                        aria-label="Menu"
                        aria-expanded={open}
                        onClick={() => setOpen((o) => !o)}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </nav>

            {/* Mobil menyu */}
            {open && (
                <ul className="md:hidden border-t border-gray-200 px-4 py-3 space-y-3 text-sm">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 hover:text-brand"
                            >
                                {link.live && <span className="w-1.5 h-1.5 rounded-full bg-brand" />}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}