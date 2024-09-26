import { Link } from "react-router-dom";

const Tag = ({ tag }: { tag: any }) => {
  return (
    <Link
      to={"/product/tags?name=" + tag}
      className="m-1 text-[0.8rem] rounded-sm shadow-sm hover:bg-secondary-700 cursor-pointer p-1 bg-secondary inline-block text-white"
    >
      {tag}
    </Link>
  );
};

export default Tag;
