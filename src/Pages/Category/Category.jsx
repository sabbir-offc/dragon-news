import { Link, useLoaderData, useParams } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar";
import { BsBookmark, BsShare } from "react-icons/bs";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Category = () => {
  const { id } = useParams();
  const newses = useLoaderData();

  const news = newses && newses.filter((news) => news.category_id === id);
  // const { author, image_url, _id, details, title } = news;

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          {news &&
            news.map((item) => (
              <div key={item._id} className="my-8 border rounded-lg">
                <div className="bg-[#F3F3F3] p-5 rounded-t-lg flex gap-4">
                  <img
                    src={item.author?.img}
                    alt={`image of ${item.author.name}`}
                    className="rounded-full w-10"
                  />
                  <div className="flex-1">
                    <p className="text-base font-semibold text-[#403F3F]">
                      {item.author?.name}
                    </p>
                    <p className="text-[#706F6F] text-sm">
                      {item.author?.published_date}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BsBookmark className="cursor-pointer text-2xl text-[#706F6F]"></BsBookmark>
                    <BsShare className="cursor-pointer text-2xl text-[#706F6F]"></BsShare>
                  </div>
                </div>
                <div className="mt-3">
                  <h2 className="text-xl font-bold text-[#403F3F] mb-5">
                    {item.title}
                  </h2>
                  <img
                    src={item.image_url}
                    alt={`image of ${item.title}`}
                    className=""
                  />
                  {item.details?.length > 200 ? (
                    <>
                      <p className="text-[#706F6F] mt-8">
                        {item.details?.slice(0, 200)}...
                      </p>
                      <Link
                        to={`/news/${item._id}`}
                        className="text-[#F75B5F] font-semibold"
                      >
                        Read More
                      </Link>
                    </>
                  ) : (
                    <>
                      <p className="text-[#706F6F] mt-8">{item.details}...</p>{" "}
                      to=
                      {`/news/${item._id}`}
                      <Link
                        to={`/news/${item._id}`}
                        className="text-[#F75B5F] font-semibold"
                      >
                        Read More
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
