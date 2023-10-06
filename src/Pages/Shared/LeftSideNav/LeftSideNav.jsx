import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import moment from "moment";

const LeftSideNav = () => {
  const location = useLocation();

  const [categories, setCategories] = useState([]);
  const [newses, setNews] = useState([]);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-[#403F3F] mb-2">
        All Caterogy
      </h2>
      <div className="p-4">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive, isPending }) =>
              isPending
                ? "block text-lg p-3 text-[#9F9F9F]"
                : isActive
                ? " bg-gray-700 text-white py-2 px-1 w-full rounded"
                : "block text-lg p-3 text-[#9F9F9F] my-3 hover:bg-gray-600 hover:text-white  hover:duration-1000"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>

      {location.pathname === `/` &&
        newses.slice(0, 3).map((news) => (
          <div className="space-y-5 my-4" key={news._id}>
            <img
              src={news.image_url}
              alt={`image of ${news.id}`}
              className="rounded"
            />
            <h2>{news.title}</h2>
            <div className="flex items-center gap-4">
              <p className="text-base">{news.rating.badge}</p>
              <p className="flex items-center gap-1 text-base text-[#9F9F9F]">
                <MdDateRange></MdDateRange>
                {moment().format("DD, MMM YYYY")}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftSideNav;
