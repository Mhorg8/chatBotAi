import { FaRegEdit } from "react-icons/fa";

const Siderbar = () => {
  return (
    <div className="col-span-3 border-e  border-e-primary w-full">
      <div className="flex items-center gap-2 bg-light-green/20 py-10 px-4">
        <button className="cursor-pointer">
          <FaRegEdit size={28} />
        </button>
        <h2 className="leading-0 text-3xl uppercase font-semibold">New chat</h2>
      </div>
      <div className="">
        <h3 className="px-4 py-5  bg-light-green/30 h-full text-2xl uppercase font-semibold text-dark-green">
          history
        </h3>

        <div className="bg-light-green/50 px-4 py-5">s</div>
      </div>
    </div>
  );
};

export default Siderbar;
