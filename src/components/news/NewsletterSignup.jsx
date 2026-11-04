"use client";

import { useState } from "react";

export default function NewsletterSignup({ author }) {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
    };

    return (
        <section className="mt-12 border-t-2 border-gray-800 bg-white p-6 shadow-md">
            <h3 className="font-serif text-base font-bold text-gray-900">
                Sign up for The NBC News Newsletter
            </h3>
            <p className="mt-1 text-[11px] text-gray-500">By {author?.name}</p>
            <p className="mt-3 max-w-md text-[11px] leading-4 text-gray-600">
                A weekly, ad-free newsletter that helps 786,000+ readers stay in the
                know, be productive, and think more critically about the world.{" "}
                <a href="#" className="underline">Take a look</a>
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                <button
                    type="submit"
                    className="mt-4 flex items-center gap-2 bg-red-600 px-4 py-2 text-[10px] font-medium tracking-widest text-white hover:bg-red-700"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                    >
                        <rect x="3" y="5" width="18" height="14" rx="1" />
                        <path d="m3 7 9 6 9-6" />
                    </svg>
                    GET THIS NEWSLETTER
                </button>
            </form>

            {sent && (
                <p className="mt-3 text-[11px] text-green-700">Thanks for subscribing!</p>
            )}
        </section>
    );
}