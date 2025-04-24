import { FormEvent, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import main from "./gemini";
import Loader from "./components/Loader";
import { RootState } from "./store/store";
import { ADD_NEW_PROMPT } from "./store/promptSlice";
import { LuBrain, LuLamp, LuLaptop, LuMic } from "react-icons/lu";
import { Conversation } from "./types";

function App() {
  const [havePrompt, setHavePrompt] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const prompts = useSelector((state: RootState) => state.prompt.propmpts);
  const [convesation, setConversation] = useState<Conversation[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompt]);

  async function search() {
    setLoading(true);

    try {
      const response = await main(prompt);

      if (response) {
        setHavePrompt(true);

        // Format the response
        let formatted = response.replace(/\n/g, "<br />");
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        // Update the state with the formatted answer
        setAnswer(formatted);
        dispatch(ADD_NEW_PROMPT(prompt));

        const chat: Conversation = {
          prompt: prompt,
          answer: formatted,
        };

        setConversation((prev) => [...prev, chat]);
        localStorage.setItem("conversations", JSON.stringify(convesation));
      } else {
        alert("Something went wrong, check your location");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  }

  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    search();
  }

  function searchByEnterKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      e.preventDefault();

      if (prompt.length === 0) {
        alert("Please enter a prompt");
        return;
      } else {
        search();
      }
    }
  }

  return (
    <div className="col-span-12 md:col-span-9 bg-white flex flex-col items-center justify-center h-full w-full">
      <div className="min-h-[70dvh] w-[80%] bg-gray rounded-xl p-2 px-2 shadow-white shadow-sm ">
        <div className="w-full max-h-[90%] h-[600px] flex flex-col-reverse mb-3 rounded-lg justify-start items-end p-3 overflow-y-auto">
          {loading ? (
            <Loader />
          ) : (
            <div className="min-w-[100px] h-full w-full ">
              {!havePrompt ? (
                <div className="flex flex-col items-end gap-3 justify-between h-full w-full flex-1">
                  <div className="flex-1 grid grid-cols-3 w-full h-full justify-center items-center gap-4">
                    <div className="bg-white justify-between w-full p-2 rounded-md border border-zinc-400 h-[140px]">
                      <div className="flex items-center justify-between w-full h-fit">
                        <h4>make idea</h4>
                        <LuBrain size={20} />
                      </div>

                      <p className="text-sm text-zinc-700 h-full flex items-end">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                    <div className="bg-white h-fit w-full p-2 rounded-md border border-zinc-400">
                      <div className="flex items-center justify-between w-full">
                        <h4>make idea</h4>
                        <LuBrain size={20} />
                      </div>

                      <p className="text-sm text-zinc-700">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                    <div className="bg-white h-fit w-full p-2 rounded-md border border-zinc-400">
                      <div className="flex items-center justify-between w-full">
                        <h4>make idea</h4>
                        <LuBrain size={20} />
                      </div>

                      <p className="text-sm text-zinc-700">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <p className="bg-white  p-2 rounded-md max-w-fit min-w-[100px] shadow-lg">
                    چطور می تونم کمک کنم؟
                  </p>
                </div>
              ) : (
                <div
                  className=" text-black shadow-lg bg-white p-2 rounded-md"
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
              )}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="h-fit w-full bg-white rounded-xl relative "
        >
          <input
            onKeyDown={searchByEnterKey}
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            placeholder="Search ..."
            type="text"
            className="w-full bg-transparent border-0 outline-0 py-3 px-5 "
          />
          <button
            className={`flex items-center justify-center p-2 absolute top-1 right-10 text-black  `}
          >
            <LuMic size={24} className="cursor-pointer hover:scale-110" />
          </button>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
            className={`${
              loading || prompt.length === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } flex items-center justify-center p-2 absolute top-1 right-3 text-black `}
          >
            <IoIosSend size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
