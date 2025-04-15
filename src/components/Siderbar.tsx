import { FaRegEdit } from "react-icons/fa";

const Siderbar = () => {
  return (
    <div className="col-span-3 border-e border-zinc-900/70   w-full">
      <div className="flex items-center gap-2 bg-zinc-900 py-10 px-4">
        <button className="cursor-pointer text-white">
          <FaRegEdit size={28} />
        </button>
        <h2 className="leading-0 text-3xl uppercase font-semibold text-white">
          New chat
        </h2>
      </div>
      <div className="bg-black/80 h-full">
        <h3 className="px-4 py-5  text-2xl uppercase font-semibold text-white">
          history
        </h3>

        <ul className="  flex flex-col justify-start items-start h-fit overflow-y-auto">
          <li className="flex items-center justify-between w-full h-fit text-white  hover:text-white bg-black/20 hover:bg-black/40 px-4 py-5 hoverEffect cursor-pointer">
            <p className="first-letter:capitalize   ">
              How can i get access to uni database?
            </p>
            <button>
              <FaRegEdit size={20} cursor="pointer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
