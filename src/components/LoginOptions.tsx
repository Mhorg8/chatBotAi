import { Button } from "./ui/button";

const LoginOptions = () => {
  return (
    <div className="w-full flex items-center justify-between gap-3">
      <Button
        variant={"outline"}
        className="flex items-center gap-2 flex-1  font-bold hover:bg-black/80 hover:text-white hoverEffect"
        type="button"
      >
        Google
      </Button>
      <Button
        variant={"outline"}
        className="flex items-center gap-2 flex-1 font-bold hover:bg-black/80 hover:text-white hoverEffect"
      >
        Github
      </Button>
    </div>
  );
};

export default LoginOptions;
