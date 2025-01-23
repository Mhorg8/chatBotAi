import toast from "react-hot-toast";

export async function useRegister(formData: FormData) {
  const password = formData.get("password");
  const email = formData.get("email");
  const username = formData.get("username");
  try {
    if (!password || !email || !username) {
      console.error("Pls fill all input fields.");
    }

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
        username,
      }),
    });
    const data: { message: string } = await response.json();
    if (response.status === 201) {
      toast.success(data.message);
      return true;
    } else if (response.status === 409) {
      toast.error(data.message);
      return false;
    } else {
      toast.error(data.message, {
        style: {
          color: "red",
        },
      });
      return false;
    }
  } catch (error) {
    console.error("Failed to send response from server", error);
  }
}
