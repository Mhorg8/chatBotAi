import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Conversation } from "../types";
import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const [convesation, setConversation] = useState<Conversation[]>([]);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  // Fetch all convesation for localStorage in initial render
  useEffect(() => {
    const history = localStorage.getItem("conversations");
    if (history) {
      setConversation(JSON.parse(history));
    }
  }, [history]);

  function handleMouseEnter(prompt: string) {
    setIsHovered(prompt);
  }
  function handleMouseLeave() {
    setIsHovered(null);
  }
  // Remove convesation from both localstorage and state
  function handleRemoveConversation(prompt: string) {
    const filterdConversation = convesation.filter(
      (item) => item.prompt !== prompt
    );

    localStorage.setItem("conversations", JSON.stringify(filterdConversation));
    setConversation(filterdConversation);
  }
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="min-h-[92dvh] p-10  bg-gray w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grdi-cols-4 gap-3">
        {convesation.length >= 1 ? (
          convesation.map((item) => {
            return (
              <div
                onMouseEnter={() => handleMouseEnter(item.prompt)}
                onMouseLeave={handleMouseLeave}
                key={item.prompt}
                className="w-full h-[200px] bg-white rounded-xl shadow-lg p-3 hover:scale-125 cursor-pointer relative"
              >
                <h3 className="text-xl font-semibold">{item.prompt}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className="line-clamp-4 mt-3 text-zinc-700"
                ></p>

                {item.prompt === isHovered && (
                  <button
                    onClick={() => handleRemoveConversation(item.prompt)}
                    className="absolute top-3 right-3 p-2 bg-zinc-200 rounded-full hover:scale-110"
                  >
                    <LuTrash cursor="pointer" />
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div className="w-[100dvw] h-full flex flex-col gap-7 items-center justify-center text-white">
            <h2 className="text-5xl  text-center w-full">
              !! گفتوگوی موجود نیست
            </h2>

            <Link
              to="/"
              className="py-3 px-7 text-dark-green border-primary border-2 rounded-md hover:bg-primary hover:text-white hoverEffect"
            >
              صفحه اصلی
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
