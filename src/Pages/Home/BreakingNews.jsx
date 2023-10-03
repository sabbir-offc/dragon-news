import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4 rounded mt-7">
      <button className="px-6 py-2 bg-[#D72050] text-xl text-white font-medium">
        Latest
      </button>
      <Marquee speed={80}>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to="/" className="mx-5">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to="/">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to="/" className="mx-5">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
