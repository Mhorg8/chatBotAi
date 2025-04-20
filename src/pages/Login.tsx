import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main className="bg-zinc-900 w-full h-[calc(100dvh-65px)] flex items-center justify-center ">
        <div className="flex items-center bg-white w-[700px] h-[500px] rounded-xl">
          <div className="w-1/2 relative h-full">
            <img
              src="/brain.jpg"
              alt=""
              className="w-full h-full object-cover rounded-s-xl aspect-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between h-full py-5 px-4">
            <div>
              <h2 className="text-2xl text-center">
                Wellcome to{" "}
                <span className="text-purple-400 font-bold">CHAT.AI</span>
              </h2>
              <p>Create an account for access to all featuers.</p>
            </div>
            <LoginForm isLoginForm />
            <div className="text-center">
              <p className="text-sm">Privacy and police</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
