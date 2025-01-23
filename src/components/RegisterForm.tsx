import { FormEvent } from "react";
import CustomInput from "../components/CustomInput";
import { Button } from "../components/ui/button";
import { useRegister } from "../hook/useRegisterUser";
import { useNavigate } from "react-router-dom";
import LoginOptions from "./LoginOptions";

const RegisterForm = () => {
  const router = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useRegister(formData);
    if (response) {
      setTimeout(() => {
        router("/login");
      }, 2000);
    }
  };

  return (
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
      <LoginOptions />

      <Button
        className="w-full hover:bg-green-600 font-bold hoverEffect shadow-lg"
        type="submit"
      >
        Create
      </Button>
    </form>
  );
};

export default RegisterForm;
