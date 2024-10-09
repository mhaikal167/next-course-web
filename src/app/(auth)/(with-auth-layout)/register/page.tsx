export default function Register() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-200 py-12 px-10">
        <form>
          <h2>Create your account !</h2>
          <p>Your email</p>
          <input className="mt-1 block px-3 py-1 w-full bg-white shadow-sm border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
          <p>Your Password</p>
          <input
            type="password"
            className="mt-1 block px-3 py-1 w-full bg-white shadow-sm border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <p>Enter re-password</p>
          <input
            type="password"
            className="mt-1 block px-3 py-1 w-full bg-white shadow-sm border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <br />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
