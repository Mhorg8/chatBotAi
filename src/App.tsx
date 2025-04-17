import { FormEvent, useState } from "react";
import { LuSearch } from "react-icons/lu";

import main from "./gemini";
import Loader from "./components/Loader";

function App() {
  const [havePropmt, setHavePrompt] = useState<boolean>(false);
  const [propmpt, setPrompt] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const response = await main(propmpt);
    if (response) {
      setHavePrompt(true);

      let formatted = response.replace(/\n/g, "<br />");

      formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      setAnswer(formatted);
      setLoading(false);
    } else {
      alert("something went wrong , check your location");
    }
  }

  return (
    <div className="col-span-9 bg-zinc-900 flex flex-col items-center justify-center h-full w-full">
      <div className="min-h-[70dvh] w-[88dvh] bg-zinc-800/70  rounded-xl p-2 px-2 shadow-white shadow-sm">
        <div className=" w-full max-h-[90%] h-[600px]  flex flex-col-reverse mb-3 rounded-lg justify-start items-end p-3  overflow-y-auto">
          {loading ? (
            <Loader />
          ) : (
            <div className="min-w-[100px] h-fit max-w-fit rounded-md bg-white p-2">
              {!havePropmt ? (
                <p>چطور می تونم کمک کنم؟</p>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: answer }}></div>
              )}
            </div>
          )}
        </div>
        <form
          onKeyDown={handleSubmit}
          onSubmit={handleSubmit}
          className="h-fit w-full bg-white rounded-xl relative"
        >
          <input
            value={propmpt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            placeholder="Search ... "
            type="text"
            className="w-full bg-transparent border-0 outline-0 py-3 px-5"
          />

          <button
            type="submit"
            className="flex items-center justify-center p-2  absolute top-1 cursor-pointer right-3 text-black"
          >
            <LuSearch size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
