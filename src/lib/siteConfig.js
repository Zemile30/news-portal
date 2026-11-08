// Saytın statik konfiqurasiyası (xəbər datası deyil, ona görə API ilə əlaqəsi yoxdur)

export const navLinks = [
  { id: 1, label: "Corona Updates", href: "/corona", live: true },
  { id: 2, label: "Politics", href: "/politics" },
  { id: 3, label: "Business", href: "/business" },
  { id: 4, label: "Sports", href: "/sports" },
  { id: 5, label: "World", href: "/world" },
  { id: 6, label: "Travel", href: "/travel" },
  { id: 7, label: "Podcasts", href: "/podcasts" },
];

export const footerLinks = {
  legal: [
    { id: 1, label: "Privacy Policy", href: "/privacy" },
    { id: 2, label: "Do not sell my personal info", href: "/do-not-sell" },
    { id: 3, label: "Terms of Service", href: "/terms" },
    { id: 4, label: "nbcnews.com Site Map", href: "/sitemap" },
  ],
  company: [
    { id: 1, label: "About", href: "/about" },
    { id: 2, label: "Contact", href: "/contact" },
    { id: 3, label: "Careers", href: "/careers" },
    { id: 4, label: "Coupons", href: "/coupons" },
  ],
  social: ["rss", "twitter", "reddit", "facebook"],
  copyright: "copyright © 2020 | NBC NEWS",
};