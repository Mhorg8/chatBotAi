import "../css/loader.css";

const Loader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="loader"></div>
      <p dir="rtl" className="text-white font-semibold mt-3">لطفا کمی صبر کنید ...</p>
    </div>
  );
};

export default Loader;
