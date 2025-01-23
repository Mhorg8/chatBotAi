import { FormEvent } from "react";
import CustomInput from "../components/CustomInput";
import { Button } from "../components/ui/button";
import { useRegisterUser } from "../hook/registerUser";

const RegisterPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInformation = Object.fromEntries(formData.entries());

    console.log(userInformation);

    // useRegisterUser(userInformation);
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container w-[350px] min-h-[350px] bg-white shadow-md flex flex-col justify-start py-4 px-5  rounded-xl ">
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <p className="text-sm  text-gray-600">
          Create an account for access to all features
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <CustomInput
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
          <CustomInput
            label="Username"
            type="text"
            placeholder="John Doe"
            name="username"
          />
          <CustomInput
            label="Password"
            type="password"
            placeholder="********"
            name="password"
          />
          <div className="w-full flex items-center justify-between gap-3">
            <Button
              className="flex items-center gap-2 flex-1 bg-green-600  hover:bg-green-600/80 font-bold"
              type="button"
            >
              Google
            </Button>
            <Button className="flex items-center gap-2 flex-1 bg-blue-600 hover:bg-blue-600/80 font-bold">
              Github
            </Button>
          </div>

          <Button className="w-full" type="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
