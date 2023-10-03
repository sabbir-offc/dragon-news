import PropTypes from "prop-types";
import { BsBookmark, BsShare } from "react-icons/bs";
const News = ({ news }) => {
  const { title, details, author, image_url } = news;
  return (
    <div className="my-8">
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
        <div className="flex gap-3">
          <BsBookmark className="cursor-pointer text-2xl text-[#706F6F]"></BsBookmark>
          <BsShare className="cursor-pointer text-2xl text-[#706F6F]"></BsShare>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-xl font-bold text-[#403F3F] mb-5">{title}</h2>
        <img src={image_url} alt="" />
        <p className="text-[#706F6F] mt-8">{details}</p>
      </div>
    </div>
  );
};
News.propTypes = {
  news: PropTypes.object,
};

export default News;
