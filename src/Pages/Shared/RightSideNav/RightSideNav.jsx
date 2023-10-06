import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from "./Qzone";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const RightSideNav = () => {
  const { googleSign, twitterSign, user } = useAuth();
  const handleSign = (media) => {
    media()
      .then(() => {
        toast.success("Sign in Successfull.");
      })
      .catch((err) => {
        toast.error("Sign in Failed, Please Try again.");
        console.log(err);
      });
  };

  return (
    <div>
      {!user && (
        <div className="p-4 space-y-4 mb-8">
          <h2 className="text-xl font-semibold">Login With</h2>
          <button
            onClick={() => handleSign(googleSign)}
            className="btn btn-outline w-full capitalize"
          >
            <FaGoogle className="text-lg"></FaGoogle> Login With Google
          </button>
          <button
            onClick={() => handleSign(twitterSign)}
            className="btn btn-outline w-full capitalize"
          >
            <FaTwitter className="text-lg"></FaTwitter> Login With Twitter
          </button>
        </div>
      )}
      <div className="p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>

        <a
          href="https://www.facebook.com/sabbir.offc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg border rounded-t-md px-4 py-2 w-full"
        >
          <FaFacebook></FaFacebook>
          <span className="text-[#706F6F]">Facebook</span>
        </a>
        <a
          href="https://www.twitter.com/sabbir_offc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg border-x px-4 py-2 w-full"
        >
          <FaTwitter></FaTwitter>
          <span className="text-[#706F6F]">Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/sabbir_offc"
          target="_blank"
          rel="noopener noreferrer"
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
