import { LuSearch } from "react-icons/lu";

function App() {
  function handleSubmit() {}

  return (
    <div className="col-span-9 bg-zinc-900 flex flex-col items-center justify-center h-full w-full">
      <div className="min-h-[70dvh] min-w-[88dvh] bg-zinc-800/70  rounded-xl p-2 px-2">
        <div className="w-full h-[90%] flex flex-col-reverse mb-3 bg-zinc-600 rounded-lg justify-start items-end p-3  ">
          <div className="min-w-[100px] h-fit max-w-fit rounded-md bg-white p-2">
            چطور می تونم کمک کنم؟
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-fit w-full bg-zinc-200/70 rounded-xl relative"
        >
          <input
            name="propmpt"
            placeholder="Search ... "
            type="text"
            className="w-full bg-transparent border-0 outline-0 py-3 px-5"
          />

          <button className="flex items-center justify-center p-2  absolute top-1 cursor-pointer right-3 text-black">
            <LuSearch size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
