import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useSession } from "../hooks/useSession";

const Siderbar = () => {
  const propmts = useSelector((state: RootState) => state.prompt.propmpts);
  const { session } = useSession();

  return (
    <div className="hidden lg:block lg:col-span-3 border-e border-primary/70 w-full">
      <div className="flex items-center gap-2 bg-primary py-10 px-4">
        <button className="cursor-pointer text-white">
          <FaRegEdit size={28} />
        </button>
        <h2 className="leading-0 text-3xl uppercase font-semibold text-white">
          گفتگوی جدید
        </h2>
      </div>
      <div className={`${session ? "" : "blur-3xl "} h-full bg-gray  relative`}>
        <h3 className="px-4 py-5  text-2xl uppercase font-semibold  text-primary">
          تاریخچه
        </h3>
        {session ? (
          <ul className="flex flex-col justify-start items-start h-fit overflow-y-auto ">
            {propmts &&
              propmts.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-between w-full h-fit text-white  hover:text-white bg-black/20 hover:bg-black/40 px-4 py-5 hoverEffect cursor-pointer"
                  >
                    <p className="first-letter:capitalize">{item}</p>
                    <button>
                      <FaRegEdit size={20} cursor="pointer" />
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          <div className="absolute top-1/3 -translate-y-1/3 left-1/5 -translate-x-1/5">
            <p className="text-primary text-xl font-semibold uppercase">
              ثبت نام کنید برای دسترسی به این بخش
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Siderbar;
