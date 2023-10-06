import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
const News = ({ news }) => {
  const { title, details, author, image_url, _id } = news;
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      isCopied && toast.success("Link copied to your clipboard");
    });
  };
  return (
    <div className="my-8 border rounded-lg">
      <div className="bg-[#F3F3F3] p-5 rounded-t-lg flex gap-4">
        <img
          src={author?.img}
          alt={`image of ${author.name}`}
          className="rounded-full w-10"
        />
        <div className="flex-1">
          <p className="text-base font-semibold text-[#403F3F]">
            {author?.name}
          </p>
          <p className="text-[#706F6F] text-sm">{author?.published_date}</p>
        </div>
        <div className="flex gap-3 items-center">
          <BsBookmark className="cursor-pointer text-2xl text-[#706F6F]"></BsBookmark>
          <button
            onClick={() =>
              copyToClipboard(`https://dragon-news-f5db4.web.app/news/${_id}`)
            }
          >
            <BsShare className="cursor-pointer text-2xl text-[#706F6F]"></BsShare>
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-xl font-bold text-[#403F3F] mb-5">{title}</h2>
        <img src={image_url} alt="" />
        {details.length > 200 ? (
          <>
            <p className="text-[#706F6F] mt-8">{details.slice(0, 200)}...</p>
            <Link to={`/news/${_id}`} className="text-[#F75B5F] font-semibold">
              Read More
            </Link>
          </>
        ) : (
          <>
            <p className="text-[#706F6F] mt-8">{details}...</p> to=
            {`/news/${_id}`}
            <Link to={`/news/${_id}`} className="text-[#F75B5F] font-semibold">
              Read More
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
News.propTypes = {
  news: PropTypes.object,
};

export default News;
