/* eslint-disable react/prop-types */
import { IF } from "../url";

const ProfilePosts = ({ p }) => {
  // console.log(p)
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 space-x-4">
      <div className="md:w-[35%] w-full md:mb-0 mb-4 h-[200px] flex justify-center items-center">
        <img src={IF + p.photo} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col md:w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {p.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{p.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {p.desc.slice(0, 200) + " ...Read more"}
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
