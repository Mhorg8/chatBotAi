import Button from "@mui/material/Button";
import { ButtonProps, Collapse, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import { LuCheck, LuX } from "react-icons/lu";

interface responseType {
  data: null | Object;
  isSuccess: boolean;
  message: string;
}

const LoginForm = () => {
  const [response, setResponse] = useState<responseType>();
  const router = useNavigate();

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[400]),
    backgroundColor: purple[500],
    border: 0,
    padding: "12px",
    fontSize: "16px",
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: purple[100],
      color: purple[500],
    },
  }));

  async function register(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const req = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        req
      );
      setResponse(response.data);
      //   localStorage.setItem("token", JSON.stringify(response.data.data));
      setTimeout(() => {
        router("/");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={register} className="mt-10 flex-1">
        <div className="flex flex-col gap-3">
          <TextField
            name="email"
            className="outlined-password-input"
            label="Email"
            type="email"
          />
          <TextField
            name="password"
            className="outlined-password-input"
            label="Password"
            type="password"
          />
          <div className="flex items-center gap-2 text-sm ">
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="underline text-purple-500 font-semibold"
            >
              Login
            </Link>
          </div>
          <hr className="text-zinc-400 mb-5" />
          <ColorButton type="submit" size="large" fullWidth variant="outlined">
            Register
          </ColorButton>
        </div>
      </form>
      <Collapse in={response}>
        {response && (
          <Alert
            className="absolute top-20 right-10"
            icon={response.isSuccess ? <LuCheck /> : <LuX />}
            severity={response.isSuccess ? "success" : "error"}
          >
            {response.message}
          </Alert>
        )}
      </Collapse>
    </div>
  );
};

export default LoginForm;
