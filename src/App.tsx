import { FormEvent, useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

import main from "./gemini";
import Loader from "./components/Loader";
import { RootState } from "./store/store";
import { ADD_NEW_PROMPT } from "./store/promptSlice";

function App() {
  const [havePrompt, setHavePrompt] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const prompts = useSelector((state: RootState) => state.prompt.propmpts);
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

        let formatted = response.replace(/\n/g, "<br />");
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        setAnswer(formatted);
        dispatch(ADD_NEW_PROMPT(prompt));

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    search(); // call search directly
  }

  function searchByEnterKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      e.preventDefault();
      search();
    }
  }

  return (
    <div className="col-span-9 bg-zinc-900 flex flex-col items-center justify-center h-full w-full">
      <div className="min-h-[70dvh] w-[88dvh] bg-zinc-800/70 rounded-xl p-2 px-2 shadow-white shadow-sm">
        <div className="w-full max-h-[90%] h-[600px] flex flex-col-reverse mb-3 rounded-lg justify-start items-end p-3 overflow-y-auto">
          {loading ? (
            <Loader />
          ) : (
            <div className="min-w-[100px] h-fit max-w-fit ">
              {!havePrompt ? (
                <p className="bg-white  p-2 rounded-md max-w-fit min-w-[100px]">
                  چطور می تونم کمک کنم؟
                </p>
              ) : (
                <div
                  className="bg-zinc-800/70 text-white"
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
              )}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="h-fit w-full bg-white rounded-xl relative"
        >
          <input
            onKeyDown={searchByEnterKey}
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            placeholder="Search ..."
            type="text"
            className="w-full bg-transparent border-0 outline-0 py-3 px-5"
          />
          <button
            type="submit"
            className="flex items-center justify-center p-2 absolute top-1 cursor-pointer right-3 text-black"
          >
            <LuSearch size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
