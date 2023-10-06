import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

const NewsDetails = () => {
  const { id } = useParams();
  const newses = useLoaderData();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const news = newses && newses.find((news) => news._id === id);
  const { image_url, title, details, category_id } = news;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
          <div className="p-7">
            <img src={image_url} alt={`image of ${title}`} />
            <h2 className="mt-5 text-2xl font-bold mb-2">{title}</h2>
            <p className="text-base text-[#706F6F]">{details}</p>
            <Link to={`/category/${category_id}`}>
              <button className="px-6 flex items-center gap-1 py-3 bg-[#D72050] text-white text-xl font-medium mt-8">
                <BsArrowLeft></BsArrowLeft> All news in the category
              </button>
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#403F3F] mt-7">
              Editors Insight
            </h1>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
