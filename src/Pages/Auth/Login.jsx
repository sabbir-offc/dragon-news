import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div className="text-center">
      <Navbar></Navbar>
      <div className="bg-white p-14 space-y-12 shadow max-w-2xl mx-auto">
        <h1 className="text-4xl text-[#403F3F] font-semibold">
          Login your account
        </h1>
        <hr />
        <form className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] text-xl font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="p-5 bg-[#F3F3F3] rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] text-xl font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="p-5 bg-[#F3F3F3] rounded"
              required
            />
          </div>
          <button className="bg-[#403F3F] text-xl py-4 text-white font-medium rounded w-full ">
            Login
          </button>
        </form>
        <p className="text-[#706F6F] text-base font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-[#F75B5F]" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
