import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm h-12 items-center  shadow-slate-500 flex justify-between">
      <Link href={"/"}>
        <p>Logo</p>
      </Link>
      <div>
        <ul className="flex gap-5 mx-4">
          <Link href="product">
            <li>Product</li>
          </Link>
          <Link href={"about"}>
            <li>About</li>
          </Link>
          <Link href={"profile"}>
            <li>Profile</li>
          </Link>
          <Link href={"login"}>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
