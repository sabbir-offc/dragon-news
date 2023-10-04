import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const { loggedUser } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loggedUser(email, password)
      .then(() => {
        toast.success("Login Successfull.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login Failed.");
      });
  };
  return (
    <div className="text-center">
      <Navbar></Navbar>
      <div className="bg-white p-14 space-y-12 shadow max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-[#403F3F] font-semibold">
          Login your account
        </h1>
        <hr />
        <form onSubmit={handleLoginUser} className="space-y-6">
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
            <div className="w-full relative flex items-center">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="p-5 pr-11 bg-[#F3F3F3] rounded w-full"
                required
              />
              <div className="absolute right-3">
                <p
                  className="text-3xl cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <BiHide></BiHide> : <BiShowAlt></BiShowAlt>}
                </p>
              </div>
            </div>
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
