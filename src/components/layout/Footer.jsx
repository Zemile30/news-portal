import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/siteConfig";

const socialImages = {
  rss: "/images/rss.png",
  twitter: "/images/twitter.png",
  reddit: "/images/reddit.png",
  facebook: "/images/facebook.png",
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Logo və copyright */}
        <div className="flex flex-col items-center gap-4">
          <Image src="/images/logo-1.png" alt="NBC News" width={44} height={30} />
          <p className="text-[9px] text-gray-400">{footerLinks.copyright}</p>
        </div>

        {/* Hüquqi linklər */}
        <ul className="space-y-2.5 text-[11px] font-medium">
          {footerLinks.legal.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Şirkət linkləri və sosial ikonlar */}
        <div className="space-y-6">
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-2 text-[11px] font-medium">
            {footerLinks.company.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex justify-center sm:justify-start sm:pl-8 gap-8">
            {footerLinks.social.map((name) => (
              <li key={name}>
                <a href="#" aria-label={name} className="block hover:opacity-70">
                  <Image
                    src={socialImages[name]}
                    alt=""
                    width={22}
                    height={22}
                    className="w-[22px] h-auto object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}