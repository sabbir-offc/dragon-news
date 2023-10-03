import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <img src="/public/assets/logo.png" alt="logo" className="mx-auto" />
      <p className="text-lg text-[#706F6F] mt-5">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl text-[#706F6F] mt-3">
        <span className="font-semibold text-[#403F3F]">
          {moment().format("dddd")},{" "}
        </span>
        {moment().format("MMMM, DD YYYY")}
      </p>
    </div>
  );
};

export default Header;
