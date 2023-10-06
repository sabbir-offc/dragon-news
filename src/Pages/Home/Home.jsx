import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {
  const newses = useLoaderData();
  return (
    <div>
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
          {newses.map((news) => (
            <News key={news._id} news={news}></News>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
