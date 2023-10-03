import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "./Qzone";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-8">
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle className="text-lg"></FaGoogle> Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-lg"></FaGithub> Login With Github
        </button>
      </div>
      <div className="p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>

        <a
          href=""
          className="flex items-center gap-3 text-lg border rounded-t-md px-4 py-2 w-full"
        >
          <FaFacebook></FaFacebook>
          <span className="text-[#706F6F]">Facebook</span>
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-lg border-x px-4 py-2 w-full"
        >
          <FaTwitter></FaTwitter>
          <span className="text-[#706F6F]">Twitter</span>
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-lg border rounded-b-md px-4 py-2 w-full"
        >
          <FaInstagram></FaInstagram>
          <span className="text-[#706F6F]">Instagram</span>
        </a>
      </div>
      {/* q zone */}
      <Qzone></Qzone>
    </div>
  );
};

export default RightSideNav;
