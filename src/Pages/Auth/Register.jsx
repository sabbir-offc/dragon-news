import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const { createUser, user } = useAuth();
  console.log(user);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast.error(
        "Password should be at least 1 Uppercase, lowercase, symbol and also 6 characters or long ."
      );
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      return toast.error("Please input a valid email.");
    }

    createUser(email, password)
      .then((res) => {
        const userInfo = res.user;
        console.log(res.user);
        toast.success("Account Created Successfully.");
        updateProfile(userInfo, {
          displayName: name,
          photoURL: image,
        });
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Account Create Failed.");
        console.log(err);
      });
  };
  return (
    <div className="text-center">
      <Navbar></Navbar>
      <div className="bg-white p-14 space-y-12 shadow max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-[#403F3F] font-semibold">
          Register your account
        </h1>
        <hr />
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] text-xl font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-5 bg-[#F3F3F3] rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter your photo url"
              className="p-5 bg-[#F3F3F3] rounded"
              required
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="text-[#706F6F] text-base font-semibold">
          Already Have An Account ?{" "}
          <Link className="text-[#F75B5F]" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
