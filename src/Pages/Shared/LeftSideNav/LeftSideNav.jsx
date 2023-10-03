import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-[#403F3F] mb-2">
        All Caterogy
      </h2>
      <div className="p-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="block text-lg p-3 text-[#9F9F9F]"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
