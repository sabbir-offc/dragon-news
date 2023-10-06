import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import moment from "moment";

import { Dropdown, Ripple, initTE } from "tw-elements";

initTE({ Dropdown, Ripple });

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
      <h2 className="text-2xl hidden md:block font-semibold text-[#403F3F] mb-2">
        All Caterogy
      </h2>

      <div className="p-4 hidden md:block">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive, isPending }) =>
              isPending
                ? "block text-lg p-3 w-full text-[#9F9F9F]"
                : isActive
                ? " bg-gray-700 text-white py-2 px-1 w-full rounded"
                : "block text-lg w-full p-3 text-[#9F9F9F] my-3 hover:bg-gray-600 hover:text-white  hover:duration-1000"
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
      <div className="relative md:hidden" data-te-dropdown-ref>
        <a
          className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          href="#"
          type="button"
          id="dropdownMenuButton2"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          All Category
          <span className="ml-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block px-3 py-4"
          aria-labelledby="dropdownMenuButton2"
          data-te-dropdown-menu-ref
        >
          <li>
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={`/category/${category.id}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "block text-lg p-3 w-full text-[#9F9F9F]"
                    : isActive
                    ? " bg-gray-700 text-white py-2 px-1 w-full rounded"
                    : "block text-lg w-full p-3 text-[#9F9F9F] my-3 hover:bg-gray-600 hover:text-white  hover:duration-1000"
                }
              >
                {category.name}
              </NavLink>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNav;
