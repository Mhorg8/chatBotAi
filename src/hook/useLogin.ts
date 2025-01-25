import toast from "react-hot-toast";

export async function useLoginUser(formData: FormData) {
  const password = formData.get("password");
  const email = formData.get("email");

  try {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data: { message: string; userId?: string | null } =
      await response.json();

    if (response.status === 200) {
      toast.success(data.message);
      // return user id
      return data.userId;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (error) {
    console.log("Login process was field", error);
  }
}
