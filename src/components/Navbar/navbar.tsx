"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Profile", href: "/profile" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-sm h-12 items-center  shadow-slate-500 flex justify-between">
      <Link href={"/"}>
        <p>Logo</p>
      </Link>
      <div>
        <ul className="flex gap-5 mx-4">
          {navLinks.map((items) => {
            const isActive = pathname.startsWith(items.href);
            return (
              <Link
                href={items.href}
                key={items.name}
                className={isActive ? "font-bold mr-4" : " text-blue-500 mr-4"}
              >
                {items.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
