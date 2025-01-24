import { FormEvent } from "react";
import CustomInput from "../components/CustomInput";
import LoginOptions from "../components/LoginOptions";
import { Button } from "../components/ui/button";
import { useLoginUser } from "../hook/useLogin";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../lib/reduxHook";
import { toggleLoginUser } from "../lib/redux/theme/themeSlice";

const LoginForm = () => {
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await useLoginUser(formData);

      if (response) {
        dispatch(toggleLoginUser(response));
        setTimeout(() => {
          router("/");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <CustomInput
          type="email"
          placeholder="example@gmail.com"
          label="Email"
          name="email"
        />
        <CustomInput
          type="password"
          placeholder="********"
          label="Password"
          name="password"
        />

        <LoginOptions />
        <Button
          type="submit"
          className="w-full hover:bg-green-600 font-semibold"
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
