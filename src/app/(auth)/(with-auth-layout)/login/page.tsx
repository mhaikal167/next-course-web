import Link from "next/link";

export default function Login() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="bg-slate-100 p-12 rounded-md">
          <form>
            <h2>Welcome please login first</h2>
            <p>Email</p>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <br />
            <p>Password</p>
            <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus-ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
            <br />
            <p>
              Forgot your password ?{" "}
              <Link href={"forgot-password"}> click here</Link>
            </p>
            <p>
              Not have account ?<Link href="register"> Sign Up Here</Link>{" "}
            </p>
            <button className="bg-blue-500 px-6 py-2 mt-4 rounded-md hover:bg-blue-600 text-white text-sm">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
