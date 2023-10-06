import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Home = () => {
  const [dataLength, setDataLength] = useState(5);
  const newses = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | Dragon News</title>
      </Helmet>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 p-4 md:p-4">
          <h2 className="text-xl font-semibold text-[#403F3F]">
            Dragon News Home
          </h2>
          {newses.slice(0, dataLength).map((news) => (
            <News key={news._id} news={news}></News>
          ))}
          <div
            className={
              dataLength === newses.length
                ? "hidden text-center"
                : "block text-center"
            }
          >
            {newses.length > 5 && (
              <button
                onClick={() => setDataLength(newses.length)}
                className="text-center bg-neutral-800 text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-transparent hover:border hover:border-red-500 hover:text-black hover:transition hover:duration-800 "
              >
                Show All
              </button>
            )}
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
