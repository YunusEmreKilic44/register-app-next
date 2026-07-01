"use server";

export const registerUser = async (prevState: any, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (email != "admin@gmail.com") {
    return { success: false, message: "Unauthorized", user: null };
  }
  return {
    success: true,
    user: {
      name,
      email,
    },
    message: "Account created successfully!",
  };
};
