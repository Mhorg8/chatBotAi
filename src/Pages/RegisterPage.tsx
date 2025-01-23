import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-zinc-200 via-zinc-300 to to-zinc-200/90 flex items-center justify-center">
      <div className="container w-[350px] min-h-[350px] bg-white shadow-md flex flex-col justify-start py-4 px-5  rounded-xl ">
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <p className="text-sm  text-gray-600">
          Create an account for access to all features
        </p>

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
